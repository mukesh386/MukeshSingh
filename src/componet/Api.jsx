import { useEffect } from "react"

const Api = () => {


    useEffect (() => {fetchData()},[])
    const proxyServer ="https://cors-anywhere.herokuapp.com/";
    const Api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5366218&lng=78.4844811&page_type=DESKTOP_WEB_LISTING";
    const fetchData  = async () => {
       const data = await fetch(`${proxyServer}${Api}`) 
       const json = await data.json();
       console.log(json)
    }

    return (
        <div>Hi </div>
    )
}
 export default Api;