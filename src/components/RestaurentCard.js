import resList from "../utils/mockData"
import { CDN_URL } from "../utils/constants"

const RestaurentCard=(props)=>{
    let name=props.resList.info.name

    let deliveryTime=props.resList.info.sla.deliveryTime

    let img=CDN_URL+props.resList.info.cloudinaryImageId

    let cuisine=props.resList.info.cuisines.join(", ")

    let avgRating=props.resList.info.avgRatingString
    
    return (
        <div className="text-center m-5  p-3 rounded-xl max-md:w-[290px]  md:w-[250px] lg:w-[320px] bg-indigo-100 hover:bg-red-950 hover:text-white cursoor-pointer hover:scale-105 transition-all duration-30">
            <img src={img} className="object-cover rounded-xl" />
            <h3 className="font-bold ">{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurentCard;