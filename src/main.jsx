import { createRoot } from 'react-dom/client'
import "./index.css";
import React , {lazy ,Suspense, useEffect, useState} from 'react';
import { createBrowserRouter  ,Outlet,RouterProvider  } from 'react-router-dom';
import userContext from './utilts/userContext';

import Header from "./componet/Header";
import Body from './componet/Body';
import Error from './componet/Error';
import About from './componet/About';
import ResMenu from './componet/ResMenu';
import Api from './componet/Api';
import {Provider} from "react-redux"
import appStore from './utilts/appStore.js';
import Cart from './componet/Cart.jsx';
import { ResData } from './componet/ResData.jsx';

const Grocery = lazy(()=> import('./componet/Grocery'))
const App =() => {
    const [userName ,setuserName] =useState()
    useEffect(() => {
        const data = {
            name:"Anasthia"
        };
        setuserName(data.name)
    },[])
    return  (

        <Provider store={appStore} >
    <userContext.Provider value ={{loggedInUser:userName  ,setuserName}}>
        <div> 
            <Header/>
            <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
        
    )

}
// routing 
const appRouter = createBrowserRouter([{
    path:"/",
    element:<App/> ,
    children:[
        {
            path:"/",
            element:<Body/>
        } ,
        {
            path:'/about',
            element:<About/>
        },
        {
            path:"/res/:resId" ,
            element:<ResMenu/>
        } ,
        {
            path:"/api",
            element:<Api/>
        },
        {
            path:"/Cart",
            element:<Cart/>
        },
        {
            path:"/res",
            element:<ResData/>
        },
        {
            path:"/grocery",
            element: <Suspense fallback ={<h2>Hello jiii</h2>}> <Grocery/> </Suspense>
        }
    ] ,
    errorElement :<Error/>
}])


 const root = createRoot(document.getElementById('root'))
 root.render(<RouterProvider router={ appRouter}/>)