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

const RestaurantCard = () => {

  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>


  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>

      <div className="res-container">
        <RestaurantCard />
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
