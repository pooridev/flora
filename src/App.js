import Home from './Layout/Home';
import './scss/main.scss';
import { Route, Switch } from 'react-router-dom'
import { Menu } from './component/common/Menu';
import  ResposiveMenu from './component/common/ResposiveMenu';
import InstagramStory from './component/common/InstagramStory';
import Footer from './component/common/Footer';
import ProductDetail from './Layout/ProductDetail';
import ShopList from './Layout/ShopList';
import CheckOut from './Layout/CheckOut';
import OrderComplete from './Layout/OrderComplete';
import Testimonials from './Layout/Testimonials';
import ContactUs from './Layout/ContactUs';
import OurStory from './Layout/OurStory';
import FAQ from './Layout/FAQ';
import Services from './Layout/Services';
import CompleteRange from './Layout/CompleteRange';
import WishList from './Layout/WishList';
import UseWindowSize from './Sizes/UseWindowSize';
import PhoneFooternav from './component/common/PhoneFooternav';
import { useContext, useState } from 'react';
import CardNav from './component/common/CardNav';
import Search from './component/common/Search';
import { GetNavcardContext } from './component/context/Navcardcontext';
import LoginNav from './component/common/LoginNav';


function App() {
  const windowSize = UseWindowSize();
  const [search, setsearch] = useState(false)
  const [loginnav, setloginnav] = useState(false)

  const {cartnav,setcartnav} = useContext(GetNavcardContext)
  return (
    <div className="FloraApp relative">
    <div className='greenHeader center'>
        
         Get 20% off for first order
        
    </div>
      {
        windowSize === 'xs' ? 
        <ResposiveMenu openlogin={()=>setloginnav(true)}
        opencardnav={()=>setcartnav(true)} opensearch={()=>setsearch(true)} />:
        <Menu 
        openlogin={()=>setloginnav(true)}
        opencardnav={()=>setcartnav(true)} opensearch={()=>setsearch(true)} />

      }
        <Switch>
           <Route exact path='/' render={()=><Home  />} />
           <Route exact path='/shoping-card' render={()=><ShopList />} />
           <Route exact path='/check-out' render={()=><CheckOut />} />
           <Route exact path='/contactus' render={()=><ContactUs />} />
           <Route exact path='/our-story' render={()=><OurStory />} />
           <Route exact path='/faq'       render={()=><FAQ />} />
           <Route exact path='/service'   render={()=><Services />} />
           <Route exact path='/wishlist'  render={()=><WishList />} />
           <Route exact path='/Complete-range' render={()=><CompleteRange />} />
           <Route exact path='/order-complete' render={()=><OrderComplete />} />
           <Route exact path='/product-detail/:id' render={()=><ProductDetail />} />
           <Route exact path='/Testimonials' render={()=><Testimonials />} />
       </Switch>
       <InstagramStory />
       <Footer />
       <PhoneFooternav/>
{
  cartnav && <CardNav cartnav={cartnav} closenav={()=>setcartnav(false)}/>
}
{
  search && <Search  closesearch={()=>setsearch(false)}
  />
}
{
  loginnav && <LoginNav cartnav={loginnav} closenav={()=>setloginnav(false)}  />
}
    </div>
  );
}

export default App;
