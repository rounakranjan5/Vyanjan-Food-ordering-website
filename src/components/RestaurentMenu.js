import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_MENU_URL } from '../utils/constants'
import ShimmerResMenu from './ShimmerResMenu'
import useOnlineStatus from '../utils/useOnlineStatus'
import ResCategory from './ResCategory'

const RestaurentMenu = () => {
  let id=useParams().id
  let [name,setName]=useState("")
  let [city,setCity]=useState("")
  let [locality,setlocality]=useState("")
  let [costForTwo,setCostForTwo]=useState("")
  let [avgRating,setavgRating]=useState("")
  let [cuisines,setCuisines]=useState([])

  let [menuItems,setMenuItems]=useState([])

  let [categories,setCategories]=useState([])

 

  useEffect(()=>{
    fetchMenu()
  },[])

  let fetchMenu=async()=>{
      try {
        let RES_MENU_URL=RESTAURANT_MENU_URL+id
        let jsonData=await fetch(RES_MENU_URL);
      
        let json=await jsonData.json();
        console.log("Menu API Response:", json);

        // Try multiple locations for categories (different API response structures)
        let regularCards = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || 
                          json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || 
                          json?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        
        // console.log("Regular cards found:", regularCards);

        let foundcateg = regularCards.filter((c)=>{
          return c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        }) || []
        
        console.log("Categories found:", foundcateg);
        setCategories(foundcateg)

        
        setName(json?.data?.cards?.[2]?.card?.card?.info?.name || "")
        setCity(json?.data?.cards?.[2]?.card?.card?.info?.city || "")
        setlocality(json?.data?.cards?.[2]?.card?.card?.info?.locality || "")
        setCostForTwo(json?.data?.cards?.[2]?.card?.card?.info?.costForTwo || 0)
        setCuisines(json?.data?.cards?.[2]?.card?.card?.info?.cuisines || [])
        setavgRating(json?.data?.cards?.[2]?.card?.card?.info?.avgRating || 0)
        setMenuItems(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories?.[0]?.itemCards || json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [])
      } catch (error) {
        console.error("Error fetching menu:", error);
        setMenuItems([]);
      }
  }

const onlineStatus=useOnlineStatus();

if(!onlineStatus) return <h1>Looks Like You're Offline Please check your Internet Connection!!</h1>

if(menuItems.length===0){
    return <ShimmerResMenu/>
  }

  
  
  console.log("categories:", categories);

  return (
    <div >
        <div className='text-center p-3 m-5'>
        <h1 className='font-bold text-2xl text-red-950'>{name}</h1>
        <p>{locality} , {city}</p>
        <h4>Cost For Two - ₹{costForTwo/100}</h4>
        <h3>{cuisines.join(', ')}</h3>
        <h3>Average Rating : {avgRating}⭐</h3>
        {/* <h2 style={{textAlign:"center"}}>Menu</h2> */}
        
        </div>

        <h2 className='text-4xl mt-5 font-semibold text-red-950 text-center'>Menu</h2>
        
       

        {
          categories && categories.length > 0 && categories.map((categ, index)=>{
            return <ResCategory key={index} data={categ} />
          })
        }

        
        <ul>
            {
                menuItems.map((item)=>{
                    return (
                        <li key={item?.card?.info?.id} className='flex justify-between flex-col  m-3 p-3 flex-wrap gap-2 rounded-lg border-gray-300 shadow-xl bg-gray-100 hover:bg-gray-200 cursor-pointer '>
                            <div className="flex-row  flex-wrap ">
                                <h4 className='text-red-950 font-semibold text-lg mb-2'>{item?.card?.info?.name}
                                </h4>


                                <div className='mb-1 flex justify-center gap-2 flex-wrap-reverse md:flex-nowrap md:justify-between'>
                                  
                                      <h4 className='text-wrap'>{item?.card?.info?.description}</h4>
                                      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.card?.info?.imageId} className='rounded-md '/>
                                   
                                </div>

                                <h4 className='font-semibold text-yellow-700 text-2xl '>₹{item?.card?.info?.price/100 || item?.card?.info?.finalPrice/100 || item?.card?.info?.variantsV2?.pricingModels[0]?.price/100}</h4>


                          </div>

                        </li>
                    )
                })
            }
            
        </ul>
    </div>
  )
}

export default RestaurentMenu




