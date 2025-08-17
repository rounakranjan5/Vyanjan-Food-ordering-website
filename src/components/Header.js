import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    let [isLoggedIn, setIsLoggedIn] = useState("Login");

    let onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between flex-wrap bg-[#5a0602]">

            <Link to="/" className="p-3 flex justify-center items-center">
                <img src={LOGO_URL} alt="logo" className="w-25 rounded-full "/>
                <h1 className="text-amber-300 text-3xl font-bold">&nbsp;&nbsp;Vyanjan</h1>
            </Link>

            <div className="text-white flex items-center flex-wrap text-lg pr-10">
                <div>
                <ul className="flex items-center flex-wrap space-x-6 list-none">
                    <li><span>Online Status: {onlineStatus ? "✅" : "🔴"}</span></li>
                    <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    <li><span className="hover:text-gray-300 cursor-pointer">Cart🛒</span></li>
                    <li>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-6 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-yellow-300" onClick={()=>{
                         {
                            isLoggedIn==="Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
                        }
                    }}>
                       {isLoggedIn === "Login" ? "🔐 Login" : "👋 Logout"}
                    </button>
                    </li>
                </ul>
                </div>
            </div>  

        </div>
    );
};

export default Header;