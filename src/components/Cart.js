import ItemsList from "./ItemsList";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    // subscribing to the store with the help of useSelector
    // Note : whenever you are subscribing to the store make sure to subscribe only to the required part of the store that is more efficient than subscribing to the entire store

    let cartItems=useSelector((store)=>store.cart.items)

    let dispatch=useDispatch()


    const handleClearCart=()=>{
        dispatch(clearCart())
    }


    return (
        <div>
            <h1 className="text-2xl font-bold text-center m-5 ">Cart Items</h1>
            <div className="flex justify-center mb-5">
            <button className="border-1 rounded-lg bg-black p-3 text-white cursor-pointer" onClick={handleClearCart}>Clear Cart 🗑️</button>
            </div>
            
            


            { cartItems.length!==0 ? <div>
                <ItemsList props={cartItems}/>
            </div> : <div className="flex flex-col justify-center items-center "><img src="https://cdn.pixabay.com/photo/2018/03/21/21/13/cart-3248227_1280.jpg" className="w-7/12 h-100 mb-5" /><h1 className="r text-xl text-red-950 font-semibold ">Your Cart is Empty !! </h1></div>}
        </div>
    )
}

export default Cart