import Home from './Layout/Home';
import './scss/main.scss';
import {Route, Switch} from 'react-router-dom'
import {Menu} from './component/common/Menu';
import ResposiveMenu from './component/common/ResposiveMenu';
// import InstagramStory from './component/common/InstagramStory';
import Footer from './component/common/Footer';
import ProductDetail from './Layout/ProductDetail';
import ShopList from './Layout/ShopList';
import CheckOut from './Layout/CheckOut';
import OrderComplete from './Layout/OrderComplete';
import Testimonials from './Layout/Testimonials';
import ContactUs from './Layout/ContactUs';
import OurStory from './Layout/OurStory';
import FAQ from './Layout/FAQ';
import CareTips from './Layout/CareTips';
import CompleteRange from './Layout/CompleteRange';
import WishList from './Layout/WishList';
import UseWindowSize from './Sizes/UseWindowSize';
import PhoneFooternav from './component/common/PhoneFooternav';
import { useContext, useState } from 'react';
import CardNav from './component/common/CardNav';
import Search from './component/common/Search';
import {GetNavcardContext} from './component/context/Navcardcontext';
import LoginNav from './component/common/LoginNav';
import RegisterNav from './component/common/RegisterNav';
import ResponsiveMenuLink from './component/common/ResponsiveMenuLink';
import SignatureDesign from './Layout/SignatureDesign';
import NoContentComponent from './Layout/NoContentComponent';
import OrderHistory from 'Layout/OrderHistory';
import Gallery from 'Layout/Gallery';
import Profile from './Layout/Profile';
import ResetPasswordNav from 'component/common/ResetPasswordNav';
import PropertiesBar from './component/home/PropertiesBar';


function App() {
    const windowSize = UseWindowSize();
    const [search, setsearch] = useState(false)
    const [responsivemenu, setresponsivemenu] = useState(false)
    const [loginnav, setloginnav] = useState(false)
	const [registerNav, setRegisterNav] = useState(false)
	const [resetPassNav, setResetPassNav] = useState(false)

    const {cartnav, setcartnav} = useContext(GetNavcardContext)
    return (
        <div className="FloraApp relative">
            <div className='greenHeader center'>

                Get 20% off for first order

            </div>
            {
                windowSize === 'md'|| windowSize === 'xs' || windowSize === 'sm' ?
                    <ResposiveMenu openlogin={() => setloginnav(true)}
                                   openmenu={() => setresponsivemenu(true)}
                                   opencardnav={() => setcartnav(true)} opensearch={() => setsearch(true)}/> :
                    <Menu
                        openlogin={() => setloginnav(true)}
                        openregister={() => setRegisterNav(true)}
                        opencardnav={() => {
                            setsearch(false);
                            setcartnav(true)
                        }} opensearch={() => setsearch(true)}/>
                

            }
              <PropertiesBar />
            <Switch>
                <Route exact path='/' render={() => <Home/>}/>
				<Route exact path='/category/:category_id' render={() => <CompleteRange/>}/>
				<Route exact path='/products/:search' render={() => <CompleteRange/>}/>
				<Route exact path='/product-detail/:product_id' render={() => <ProductDetail/>}/>
				<Route path='/shoping-card/:transaction_code' render={() => <ShopList/>}/>
				<Route path='/shoping-card' render={() => <ShopList/>}/>
				<Route exact path='/profile' render={() => <Profile />}/>
				<Route exact path='/gallery' render={() => <Gallery />}/>

				<Route exact path='/check-out' render={() => <CheckOut/>}/>
				<Route exact path='/Testimonials' render={() => <Testimonials/>}/>
				<Route exact path='/contactus' render={() => <ContactUs/>}/>
				<Route exact path='/our-story' render={() => <OurStory/>}/>
				<Route exact path='/faq' render={() => <FAQ/>}/>
				<Route exact path='/care-tips' render={() => <CareTips />}/>
				<Route exact path='/wishlist' render={() => <WishList/>}/>
				<Route exact path='/order-history' render={() => <OrderHistory />}/>

				<Route exact path='/order-complete' render={() => <OrderComplete/>}/>
                <Route exact path='/Testimonials' render={() => <Testimonials/>}/>

                <Route exact path='/signature-design' render={() => <SignatureDesign title='Signature design'/>}/>
                <Route exact path='/Event-Service' render={() => <SignatureDesign title='Event Service'/>}/>
                <Route exact path='/Wedding-Services' render={() => <SignatureDesign title='Wedding Services'/>}/>
                <Route exact path='/PREMIUM-BUOQUET' render={() => <SignatureDesign title='PREMIUM BUOQUET'/>}/>
                <Route exact path='/CUSTOM-BOXES' render={() => <SignatureDesign title='CUSTOM-BOXES'/>}/>

                <Route render={() => <NoContentComponent/>}/>


            </Switch>
            {/*<InstagramStory/>*/}
            <Footer/>
            <PhoneFooternav openlogin={() => setloginnav(true)}/>
            {
                cartnav && <CardNav cartnav={cartnav} closenav={() => setcartnav(false)}/>
            }
            {
                search && <Search closesearch={() => setsearch(false)}
                />
            }
            {
                loginnav && <LoginNav cartnav={loginnav} closenav={() => setloginnav(false)} openRegister={()=> {
					setRegisterNav(true);
					setloginnav(false)
                }}
                openReset={() => {
					setloginnav(false)
                    setResetPassNav(true);
                }}
                />
            }
			{
				registerNav && <RegisterNav cartnav={registerNav} closenav={() => setRegisterNav(false)}
											openLogin={()=> {
												setRegisterNav(false);
												setloginnav(true)
											}}
				/>
			}
            {
                resetPassNav && <ResetPasswordNav cartnav={resetPassNav} closenav={() => setResetPassNav(false)}
                                            openRegister={()=> {
                                                setResetPassNav(false)
                                                setRegisterNav(true);
                                            }}
                />
            }
            {
                responsivemenu && <ResponsiveMenuLink closenav={() => setresponsivemenu(false)}/>

            }
        </div>
    );
}

export default App;
