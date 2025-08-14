import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

    const [listofRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchInp,setSearchInp] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    let fetchData=async ()=>{
        const data=await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6556793&lng=77.1874601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json=await data.json();
        console.log(json);
        
        setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }


    // conditional rendering
    // if (listofRestaurants.length === 0) {
    //     return <Shimmer/>
    // }

    return listofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search-filter-top-container">
            <div className="filter-toprated-container">
                <button className="filter-toprated-btn" 
                onClick={
                    ()=>{
                    let topratedRes=filteredRestaurants.filter((res)=> 
                        res.info.avgRating >= 4.5
                    );
                    setfilteredRestaurants(topratedRes);
                    }
                } >Top Rated Restaurants</button>
                
                &nbsp;

                <button className="reset-btn" 
                onClick={
                    ()=>{
                    setfilteredRestaurants(listofRestaurants);
                    }
                } >Show All Restaurants</button>
            </div>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search for restaurants..." value={searchInp} onChange={(e)=>{
                    setSearchInp(e.target.value)
                }} />
                &nbsp;
                <button className="search-btn" onClick={()=>{
                    const filteredRes=listofRestaurants.filter((res)=>res.info.name.toLowerCase().trim().includes(searchInp.toLowerCase().trim()))
                    setfilteredRestaurants(filteredRes)
                }}>Search</button>
                &nbsp;
                <button className="clear-search-btn" onClick={()=>{
                    setSearchInp("");
                    setfilteredRestaurants(listofRestaurants)
                }}>Clear</button>
            </div>

            </div>


            <div className="res-container">

                {
                    filteredRestaurants.map((restaurant) =>
                        <Link to={`/restaurant/${restaurant.info.id}` } key={restaurant.info.id}>
                         <RestaurentCard  resList={restaurant}/>
                         </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;