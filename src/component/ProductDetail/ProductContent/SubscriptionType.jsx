import NumButton from "component/common/NumButton";
import { CustomAlert } from "helpers/alert";
import { requestAddToBasket, requestGetBasket } from "queries/basket";
import hearts from "../../../assets/image/home/icon/Combined Shape.svg";
import checkicon from "../../../assets/image/home/icon/noun_Check Mark_15005.svg";
import {
	requestProductAddFavourite,
	requestProductRemoveSingleFavourite,
	requestSingleFavourite,
} from "queries/products";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "redux/action-creators/card";
import { usePatch } from "./../../../hooks/usePatch";
import { haveTokens } from "./../../../helpers/auth";

const SubscriptionType = ({ detail, onUpdatePrice }) => {
	const [count, setCount] = useState(1);
	const Card = useSelector((state) => state.Card);
	const [check, setCheck] = useState(false);
	const dispatcher = useDispatch();
	const isProductEnable = detail["details"][0]["is_enable"];

	const [generalAttributes, setGeneralAttributes] = useState([]);

	const [selectedAttributes, setSelectedAttributes] = usePatch();

	const [sizes, setSizes] = useState([]);
	const [selectedSize, setSelectedSize] = useState();

	const [stockQuantity, setStockQuantity] = useState();

	const onChangeCount = (cn) => {
		setCount(cn);
	};

	const isAllowedToAdd = () => {
		// We only can have either Product or Subscription type in the basket
		const basketProductType =
			Card["basket"]["items"][0]?.product_type || detail["product_type"];
		return basketProductType === detail["product_type"];
	};

	const getBasketPayload = () => {
		let BASKET_PAYLOAD = [
			{
				quantity: 1,
				product_id: detail["id"],
				product_details_id: detail["details"][0]["product_details_id"],
				product_type: "subscription",
				selected_attributes: selectedAttributes,
				extra: [],
			},
		];

		return BASKET_PAYLOAD;
	};
	const isLoggedIn = haveTokens();
	const basketData = { ...Card["basket"] };
	const addToCard = () => {
		// check for attributes
		const attributeValues = Object.values(selectedAttributes) || [];
		const generalAttributesValues = Object.values(generalAttributes);
		if (
			!attributeValues ||
			attributeValues.length < generalAttributesValues.length
		) {
			CustomAlert({
				icon: "error",
				text: "Please select all attributes",
			});
			return;
		}

		const product = Card["basket"]["items"].find(i => i.product_id === detail['id']);
		const invalidProductsInBasket = Card["basket"]?.["invalidItems"];

		const isProductExist = invalidProductsInBasket?.find(
			(item) => item.invalid_items.product_id === detail["id"]
		);

		debugger
		if (count >= stockQuantity || product?.quantity >= product?.stock_quantity  || product?.quantity >= stockQuantity || isProductExist) {
			CustomAlert({
				icon: "error",
				text: "Sorry, out of stock",
			});
			return false;
		}

		if (!isLoggedIn) {
			const BASKET_PAYLOAD = {
				quantity: count,
				product_id: detail["id"],
				product_details_id: detail["details"][0]["product_details_id"],
				product_type: "subscription",
				extra: [],
				selected_attributes: selectedAttributes,
			};

			const localBasket = JSON.parse(localStorage.getItem("basket")) || {
				items: [],
			};
			const existInBasketIndex = localBasket.items.findIndex(
				(item) => item["product_id"] === detail.id
			);

			if (existInBasketIndex !== -1) {
				basketData["items"][existInBasketIndex]["quantity"] =
					basketData["items"][existInBasketIndex]["quantity"] +
					BASKET_PAYLOAD["quantity"];
			} else {
				isAllowedToAdd()
					? basketData.items.push(BASKET_PAYLOAD)
					: CustomAlert({
							icon: "error",
							text: "Invalid product type, try removing items from cart",
					  });
			}
			isAllowedToAdd() &&
				CustomAlert({ icon: "success", text: "Item added" });
			isAllowedToAdd() &&
				localStorage.setItem("basket", JSON.stringify(basketData));
			isAllowedToAdd() && dispatcher(getBasket(basketData));
			return;
		}

		const BASKET_PAYLOAD = getBasketPayload();
		const existInBasketIndex = basketData.items.findIndex(
			(item) => item["product_id"] === detail.id
		);
		if (existInBasketIndex !== -1) {
			BASKET_PAYLOAD[0]["quantity"] = count;
			basketData["items"][existInBasketIndex]["quantity"] =
				BASKET_PAYLOAD[0]["quantity"];
		} else {
			isAllowedToAdd()
				? basketData.items.push(BASKET_PAYLOAD)
				: CustomAlert({
						icon: "error",
						text: "Invalid product type, try removing items from cart",
				  });
		}

		// isAllowedToAdd => only can have one type of product in the basket
		isAllowedToAdd() &&
			requestAddToBasket(BASKET_PAYLOAD).then((res) => {
				CustomAlert({ icon: "success", text: "Item added" });
				dispatcher(getBasket(res.data));
				requestGetBasket().then((res) =>
					dispatcher(getBasket(res.data))
				);
			});
	};

	const addToFavourites = () => {
		if (!isLoggedIn) {
			return CustomAlert({
				icon: "warning",
				title: "Opps...",
				text: "You must Login to your account",
			});
		}

		!check
			? requestProductAddFavourite({
					product_id: detail.id,
					product_details_id:
						detail["details"][0]["product_details_id"],
			  })
			: requestProductRemoveSingleFavourite({
					product_id: detail.id,
					product_details_id:
						detail["details"][0]["product_details_id"],
			  });
	};

	const checkWishlistState = () => {
		if (isLoggedIn) {
			requestSingleFavourite({ product_id: detail.id })
				.then((data) => setCheck(true))
				.catch((err) => setCheck(false));
		}
	};
	useEffect(() => {
		checkWishlistState();
		const truthyGeneralAttibutes = Object.entries(
			detail["general_attributes"]
		).filter((item) => item[0] && item[1]);

		/**
		 * @description
		 * @param {Array} filteredGeneralAttributes
		 * this will filter out the general attribute keys that are not valid
		 * valid general attribute are: "flower_color", "box_color", "flower_type"
		 */
		const filteredGeneralAttributes = truthyGeneralAttibutes.filter(
			(i) =>	["flower_color", "box_color", "flower_type"].indexOf(i[0]) >= 0
		);

		/**
		 * @description
		 * @param {Array} truthySizes
		 * this will filter out the sizes that are not valid
		 */
		const truthySizes = detail["details"].filter(
			(item) =>
				item["attributes"]?.["size"] &&
				item["price"] &&
				item["stock_quantity"]
		);
		console.log(truthySizes);

		setSizes(truthySizes);
		setSelectedSize(truthySizes?.[0]);
		setSelectedAttributes({ size: truthySizes[0]?.['attributes']?.['size'] })
		setStockQuantity(truthySizes?.[0]?.["stock_quantity"]);
		setGeneralAttributes([...filteredGeneralAttributes]);
	}, []);

	/**
	 * @description update the selected size and update the product price
	 * @param {number} price
	 * @param {string} size
	 */
	 const updateSelectedSize = (price, size, stockQuantity) => {
		setSelectedSize({
			size,
		})
		setSelectedAttributes({
			size,
		})
		onUpdatePrice(price)
		setStockQuantity(stockQuantity);
	}
	
	return (
		<>
			<div className="ProductdetailInfo__orderrow">
				<NumButton onChange={onChangeCount} />
				<button
					className="btn third-btn"
					onClick={() => {
						if (detail["details"][0]["stock_quantity"] > 0) {
							addToCard();
						} else {
							CustomAlert({
								icon: "error",
								text: "Product is not available",
							});
						}
					}}
				>
					{detail["details"][0]["stock_quantity"] !== 0
						? "ADD TO CART"
						: "Unavailable"}
				</button>
			</div>
			<div className="ProductdetailInfo_icontext">
				<div
					onClick={() =>
						isLoggedIn && setCheck((prevCheck) => !prevCheck)
					}
					style={{ cursor: "pointer" }}
					className="d-flex ProductdetailInfo_icontext-box"
				>
					<div>
						{check && isLoggedIn ? (
							<img
								alt="social"
								src={checkicon}
								style={{ width: "22px" }}
							/>
						) : (
							<img alt="social" src={hearts} />
						)}
					</div>
					<p onClick={addToFavourites}>
						{check ? "Remove from" : "Add to"} wishlist
					</p>
				</div>
				<div className="product-attributes">
					{generalAttributes.filter(Boolean).map((atts) => (
						<div className="product-attribute">
							<h5 className="product-attribute__title">
								{atts[0]}
							</h5>
							<div className="product-attribute__wrapper">
								{Array.isArray(atts[1]) ? (
									atts[1].map((att) => (
										<div className="product-attribute__option">
											<input
												className="option-radio"
												name={atts[0]}
												type="radio"
												value={att}
												onChange={({ target }) =>
													setSelectedAttributes({
														[atts[0]]: target.value,
													})
												}
												id={att}
											/>
											<label
												className="option-label"
												htmlFor={atts[0]}
											>
												{att}
											</label>
										</div>
									))
								) : (
									<div className="product-attribute__option">
										<input
											className="option-radio"
											name={atts}
											type="radio"
											value={atts[1]}
											onChange={({ target }) =>
												setSelectedAttributes({
													[atts[0]]: target.value,
												})
											}
											id={atts}
										/>
										<label
											className="option-label"
											htmlFor={atts}
										>
											{atts[1]}
										</label>
									</div>
								)}
							</div>
						</div>
					))}
					{/* available sizes of product  */}
					<div className="product-attribute">
					{	sizes.length ? <h5 className="product-attribute__title">Sizes</h5> : null}
						<div className="product-attribute__wrapper">
							{sizes.map((size) => {
								return (
									<div className="product-attribute__option">
										<input
											className="option-radio"
											name="size"
											type="radio"
											defaultChecked={
												size["attributes"]["size"] ===
												selectedSize?.["attributes"]?.[
													"size"
												]
											}
											value={size["attributes"]["size"]}
											onChange={({ target }) =>	updateSelectedSize(size.price, target.value, size.stock_quantity)}
											id={size["attributes"]["size"]}
										/>
										<label
											className="option-label"
											htmlFor={size["attributes"]["size"]}
										>
											{size["attributes"]["size"]}
										</label>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubscriptionType;
