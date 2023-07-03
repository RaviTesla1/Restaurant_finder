import { LOGO_URL } from "../utisils/constants";
import { LOGO_URL_1 } from "../utisils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utisils/useOnlineStatus";
// import Grocery from "./Grocery";
const Header = () => {

  let [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

 

    return (
      <div className="header">
        <div className="logo-container">
          <img
            src= {LOGO_URL}
            alt=""
            className="logo"
          />
         
          
        </div>
        <div className="nav-items">
          <ul>
            <li> 
              Online status: {onlineStatus ?"🟢":"🔴"}
            </li>
            <li> <Link to="/"   className="text-sm">Home</Link> </li>
            <li><a  href="./about">About Us</a> </li>
            <li><Link  to="/contact">Contact Us</Link></li>
            <li><Link  to="./grocery">Grocery</Link></li>
            <li>Cart</li>
            <button   className="login" onClick={() => {
                  btnNameReact === "Login" ? setbtnNameReact("LogOut") : setbtnNameReact("Login");
                  console.log("header render")
            }}  > {btnNameReact} </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;