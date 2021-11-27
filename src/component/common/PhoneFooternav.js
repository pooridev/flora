import React, {  useEffect, useState } from "react";
import shop from "../../assets/image/home/icon/store.svg";
import heart from "../../assets/image/home/icon/Heart.svg";
import Link from "react-router-dom/Link";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { haveTokens } from "./../../helpers/auth";
import user from "assets/image/user.png";
import Menu from "@material-ui/core/Menu";
import { db } from "./../../helpers/db";
import { MenuItem, Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import { requestGetProfile } from './../../queries/me';
import { getProfile } from './../../redux/action-creators/profile';
import { useDispatch, useSelector } from "react-redux";
import { getAbsolutePath } from './../../helpers/strings';
import { useLocation } from 'react-router-dom';

const PhoneFooternav = ({ openlogin }) => {
	const isLogin = haveTokens();
    const history = useHistory()
	const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch()
    const { pathname }  = useLocation()
    const { avatar } = useSelector(({ Profile }) => Profile.profile)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logout = () => {
		db.del("tokens");
		window.location.reload();
	};
    useEffect(() => {
        if (isLogin) {
            requestGetProfile()
            .then(({ data }) => {
                dispatch(getProfile(data))
            })
            .catch(err => console.log(err))
        }
    } , [])

	return (
		<div className="PhoneFooternav">
			<Link to="/category/0867ae0a-2cfe-456a-bdce-8d0c3144397db">
				<div className={`${pathname.includes('category') ? 'link-bold' : ''}  column-center PhoneFooternav--box`}>
					<img alt="hw" src={shop} />
					<p>Shop</p>
				</div>
			</Link>
			<Link to="/shoping-card">
				<div className={`${pathname.includes('shoping-card') ? 'link-bold' : ''} column-center PhoneFooternav--box`}>
					<ShoppingBasket fontSize="large" />
					<p>Cart</p>
				</div>
			</Link>

			{isLogin ? (
                	<>
                        <Button
                            onClick={handleClick}
                            aria-controls="simple-menu" aria-haspopup="true"
                            className={`${pathname.includes('profile') ? 'link-bold' : ''} column-center PhoneFooternav--box`}
                        >
                            <img alt="hw" src={getAbsolutePath(avatar) ?? user} />
                            <p>Profile</p>
                        </Button>
                        <Menu
                            classes={{ paper: 'phoneProfileMenu' }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                    >
                        <MenuItem
                            onClick={() => {
                                history.push("/profile");
                                handleClose();
                            }}
                        >
                            Profile
                        </MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
				</>
			) : (
                <Link
                    onClick={openlogin}
                    className="column-center PhoneFooternav--box"
                >
                    <img alt="hw" src={user} />
                    <p>Login</p>
                </Link>
			)}
		</div>
	);
};

export default PhoneFooternav;
