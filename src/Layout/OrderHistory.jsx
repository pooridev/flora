import OrderHistoryTable from "./../component/OrderHIstory/OrderHistoryTable";
import { requestDeleteOrder, requestReOrder } from "./../queries/orders";
import { requestGetBasket } from "queries/basket";
import { useDispatch } from "react-redux";
import { CustomAlert } from "helpers/alert";
import { getBasket } from "redux/action-creators/card";

const OrderHistory = ({ orders, getOrders }) => {
	const dispatch = useDispatch();

	const orderAgainHandler = (order) => {
		const REORDER_PAYLOAD = { order_id: order["id"] };

		requestReOrder(REORDER_PAYLOAD).then((_) => {
			CustomAlert({
				icon: "success",
				title: "Cart updated",
				text: "Items added",
			});
			requestGetBasket().then((res) => dispatch(getBasket(res.data)));
		});
	};

	const deleteOrderHandler = (order, orderStatus) => {
		const DELETE_PAYLOAD = { order_id: order["id"] };

		if (orderStatus === 'pending') {
			requestDeleteOrder(DELETE_PAYLOAD).then((_) => {
				getOrders();
			});
			return
		}

		CustomAlert({ icon: 'error', text: 'only pending orders can be deleted !' })
	};
	return (
		<OrderHistoryTable
			orders={orders}
			onOrderAgain={orderAgainHandler}
			onDeleteOrder={deleteOrderHandler}
		
		/>
	);
};

export default OrderHistory;
