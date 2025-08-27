import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurentCard from "./components/RestaurentCard";
import About from "./components/About";
// import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { lazy } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// resList[0].card.card.gridElements.infoWithStyle.restaurants[0].info.name

const Contact = lazy(()=> import("./components/Contact"))


const AppLayout = () => {
    let [UserName, setUserName] = useState();
    
    

    useEffect(()=>{
            const data={
                // fetch the api find the username and set it here
                UserName: "Rounak Bhaii"
            }

            setUserName(data.UserName)
    },[])

    return (
            <Provider store={appStore}>
            <userContext.Provider value={{loggedInUserName: UserName , setUserName}}>
            <div className="app">
                
                <Header/>
                <Outlet/>
                
            </div>
            </userContext.Provider>
            </Provider>

    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [

            {
                path:"/",
                element: <Body/>
            }, 

            {
                path:"/about",
                element: <About/>
            }, 

            {
                path:"/cart",
                element: <Cart/>
            }, 

            {
                path:"/contact",
                element: <Suspense fallback={<h1>Loading Contact Details...</h1>}><Contact/></Suspense>
            },

            {
                path:"/restaurant/:id",
                element: <RestaurentMenu/>
            }

        ]

    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)