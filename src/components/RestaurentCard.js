import resList from "../utils/mockData"
import { CDN_URL } from "../utils/constants"

const RestaurentCard=(props)=>{
    let name=props.resList.info.name

    let deliveryTime=props.resList.info.sla.deliveryTime

    let img=CDN_URL+props.resList.info.cloudinaryImageId

    let cuisine=props.resList.info.cuisines.join(", ")

    let avgRating=props.resList.info.avgRatingString
    
    return (
        <div className="res-card">
            <img src={img} />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurentCard;