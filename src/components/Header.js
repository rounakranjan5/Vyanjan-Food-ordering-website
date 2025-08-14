import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    let [isLoggedIn, setIsLoggedIn] = useState("Login");

    let onlineStatus = useOnlineStatus();
    return (
        <div className="header">

            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Online Status :{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="loginBtn" onClick={()=>{
                         {
                            isLoggedIn==="Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
                        }
                    }}>
                       {isLoggedIn}
                    </button>
                </ul>
            </div>  

        </div>
    );
};

export default Header;