import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { PromotedResCard } from "./RestaurentCard";

const Body=()=>{

    const [listofRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchInp,setSearchInp] = useState("");

    console.log("list of restaurants", listofRestaurants);

    useEffect(()=>{
        fetchData();
    },[])

    let fetchData=async ()=>{
        const data=await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6556793&lng=77.1874601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json=await data.json();
        console.log(json);
        
        // Try different card indices as API returns different structures for different devices
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
                           json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
                           json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
                           json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setListOfRestaurants(restaurants);
        setfilteredRestaurants(restaurants);
    }


    // conditional rendering
    // if (listofRestaurants.length === 0) {
    //     return <Shimmer/>
    // }

    const PromotedCard=PromotedResCard(RestaurentCard)

    return listofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div >
            <div className="flex justify-center items-center flex-wrap">
                <button className="bg-emerald-500 text-black m-2 p-3 rounded-full font-bold cursor-pointer" 
                onClick={
                    ()=>{
                    let topratedRes=filteredRestaurants.filter((res)=> 
                        res.info.avgRating >= 4.5
                    );
                    setfilteredRestaurants(topratedRes);
                    }
                } >Top Rated Restaurants</button>
                
                &nbsp;

                <button className="bg-lime-700 text-black m-2 p-3 rounded-full font-bold cursor-pointer" 
                onClick={
                    ()=>{
                    setfilteredRestaurants(listofRestaurants);
                    }
                } >Show All Restaurants</button>
            </div>

            <div className="flex justify-center items-center flex-wrap">
                <input type="text" className="w-6/12 border-2 p-2 m-5" placeholder="Search for restaurants..." value={searchInp} onChange={(e)=>{
                    setSearchInp(e.target.value)
                }} />
                &nbsp;
                <button className="bg-red-500 text-black m-2 p-3 rounded-lg font-bold cursor-pointer" onClick={()=>{
                    const filteredRes=listofRestaurants.filter((res)=>res.info.name.toLowerCase().trim().includes(searchInp.toLowerCase().trim()))
                    setfilteredRestaurants(filteredRes)
                }}>Search</button>
                &nbsp;
                <button className="bg-amber-500 text-black m-2 p-3 rounded-lg font-bold cursor-pointer" onClick={()=>{
                    setSearchInp("");
                    setfilteredRestaurants(listofRestaurants)
                }}>Clear</button>
            </div>

            </div>


            <div className="flex  flex-wrap justify-center gap-4 w-full 0">

                {
                    filteredRestaurants.map((restaurant) =>
                        <Link to={`/restaurant/${restaurant.info.id}` } key={restaurant.info.id}>
                         
                         {
                            restaurant.info.promoted ? ( <PromotedCard resList={restaurant} /> ) : ( <RestaurentCard resList={restaurant} /> )
                         }

                         </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Body;