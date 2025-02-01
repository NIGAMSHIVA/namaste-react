import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 -Logo
 -nav-items

Body
 -Search
 -Restaurant-Container
  -Restaurant Cart
Footer
 -Copyright
 -links
 -address
 -Contacts


*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/cheese-burger-with-lettuce-and-cheese-2697ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stylecard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({resname,cuisines}) => {


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl"
      />
      <h3>{resname}</h3>
      <h4>{cuisines}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <RestaurantCard resname="Meghna Foods" cuisines="Biryani,North-Indian,Asian"/>
        <RestaurantCard resname="KFC" cuisines="Burger,Fast Food"/>
     
     
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
