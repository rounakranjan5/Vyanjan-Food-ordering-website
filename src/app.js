import React, { Suspense } from "react";
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

// resList[0].card.card.gridElements.infoWithStyle.restaurants[0].info.name

const Contact = lazy(()=> import("./components/Contact"))


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            
        </div>
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