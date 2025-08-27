import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // in older redux or vanilla redux we were not allowed to mutate the state directly but with the help of redux toolkit we can mutate the state directly because it uses immer library internally which allows us to write mutating logic in reducers but it doesn't actually mutate the state instead it creates a new state immutably behind the scenes so in short BTS RTK and older redux both works same BTS but RTK uses immer library to do so and RTK provided developers convenience that they HAVE TO MUTATE THE STATE DIRECTLY but in older redux we cant mutate the state directly we have to create a new state object and return it
            
            // mutating the state
            state.items.push(action.payload)
        },

        removeItem:(state)=>{
            // mutating the state
            state.items.pop()
        },

        clearCart:(state)=>{
            // mutating the state
            state.items.length=0;
            // state.items=[];// this will not work
            // because here we are not mutating the state directly we are creating a new array and assigning it to the state.items which is not allowed in redux toolkit
            // we are changing the reference of the state.items which is not allowed in redux toolkit thats why its not working and the cart is not getting cleared so we use state.items.length=0 to clear the cart that works 
            // return { items : [] } // this will also work to clear the cart because here we are returning a new state which is allowed in redux toolkit
            // RTK says either mutate the state directly or return a new state object both are allowed but we cant do both at the same time
            // whatever you return from the reducer the new state will be that only
        }

    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer

// here(cartSlice.js) reducers word is used and in appStore we use reducer without s because in appStore we are combining all the slices and creating a single reducer
// appStore ke pass ek reducer isliye s nhi lagate aur yeh multiple reducers rkhta hai apne andar jo alag alag slices hote hai unke liye alag alag reducers hote hai aur jab slice banate hai tab hum multiple reducers bana sakte hai ek hi slice ke andar jo ki alag alag actions ko handle karte hai
// jaise yaha pe addItem,removeItem,clearCart alag alag actions ko handle karte hai aur yeh teeno ek hi slice ke andar hai to isliye yaha pe reducers likha hai plural form me