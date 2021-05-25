import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom'; 
import CartScreen from './screens/CartScreen';
import HomeScreen1 from './screens/HomeScreen1';
import HomeScreen2 from './screens/HomeScreen2';
import ShirtScreen from './screens/ShirtScreen'; 
import ShoeScreen from './screens/ShoeScreen';
function App() {
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return ( 
    <BrowserRouter>
    <div><div className="grid-container">
      <header> 
          <div className="hdr1">
              <img className="closeMenu" src="/images/close.png" alt="" srcset="" width="34px"></img>
              <img className="openMenu" src="/images/hamburger.png" alt="" srcset="" width="36px"></img>
          </div>
          <div className="hdr2"><img src="/images/ebuylogo.png" alt="" srcset=""></img></div>
          <div className="hdr3">
            <Link to="/account" className="acc">
              <img src="/images/account.png" width="52px" alt=""></img>
            </Link>
            <Link to="/cart" className="cart">
              <img src="/images/cart.png" width="52px" alt=""></img>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link> 
              <div className="search">
                  <input type="text" placeholder="Search here..."></input>
                  <button type="button"></button>
              </div>
          </div>
      </header>
      <nav>
          <div className="nav1">
            <li><a href="/">Home</a></li>
            <li><a className="aboutus">About us</a></li>
            <li className="accessory"><a>Accessories</a>
              <ul className="accessories">
                <li className="acc1">Men Shirts</li>
                <li className="acc2">Men Shoes</li>
              </ul>
            </li>
            <li className="acc1 accessories a1"><a href="#ac1">Men Shirts</a></li>
            <li className="acc2 accessories a2"><a href="#ac2">Men Shoes</a></li>
          </div>
          <div className="nav2">
            <a style={{textDecoration : "none"}}href="mailto:shubhambhola87@gmail.com"><div>Contact@eBuy </div>
            <i className="fa fa-envelope" aria-hidden="true"></i></a> 
          </div>
      </nav> 
      <main>
          <div className="salebanner"></div>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/shirt/:id" component={ShirtScreen}></Route>
          <Route path="/shoe/:id" component={ShoeScreen}></Route>
          <Route path="/" component={HomeScreen1} exact></Route>
          <Route path="/" component={HomeScreen2} exact></Route>
          
      </main>
    </div>   
    <footer className="p-footer" id="footer">
            <div className="row alignup">
              <div className="col-sm-2">
                <ul>
                  <li><h2 style={{fontSize:"2.7rem"}}>eBuy</h2></li>
                  <li><p>eBuy Inc. is an Indian multinational e-commerce corporation based in Delhi, India, that facilitates consumer-to-consumer and business-to-consumer sales through its website. eBay was founded by <i><b>Shubham Bhola</b></i>, and became a notable success story.</p></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <ul>
                  <li><h2 style={{fontSize:"2.7rem"}}>About Us</h2></li>
                  <li><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi luctus. Duis lobortis. Nulla nec velit. Mauris pulvinar erat non massa. Suspendisse tortor turpis, porta nec, tempus vitae, iaculis semper, pede. Cras vel libero id lectus rhoncus porta.</p></li>
                </ul>
              </div>
              <div className="col-sm-2">
                <ul>
                  <li><h2 style={{fontSize:"2.7rem"}}>Terms of Service</h2></li>
                  <li><p>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service.</p></li>
                </ul>
              </div>
              <div className="col-sm-1 contact">
                <ul>
                  <li><h2 style={{fontSize:"2.7rem"}}>Contact Us</h2></li>
                  <li className="row icons">
                    <a href=""><i className="fa fa-facebook icons"></i></a>
                    <a href=""><i className="fa fa-instagram icons"></i></a>
                    <a href=""><i className="fa fa-twitter icons"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <p className="p-footer footer-bottom">Copyright &copy; 2021 - All rights reserved | Designed by <a
                href="https://iamshubhambhola.github.io/itzshubham/"><b><i style={{color: "rgb(253, 209, 142)"}}>Shubham
                      Bhola</i></b></a>
            </p>
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
