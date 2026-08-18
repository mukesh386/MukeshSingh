
import ResCard  ,{withPromotedLabel}from "./RestaurantCard"
import useOnlineStatus from "../utilts/useOnlineStatus"
import useResList from "../utilts/useResList"
import { useEffect, useState } from "react"
import userContext from "../utilts/userContext"
import { useContext } from "react"
const Body =() => {
  
// const [onlineStatus ,setOnlineSatus] = useState(true)

const resList = useResList()
   const onlineStatus = useOnlineStatus()
    const RestaurantCardPro = withPromotedLabel(ResCard)


    const {setuserName,loggedInUser} = useContext(userContext)
    return  onlineStatus ? (
        <div>
          
          <label className="font-bold text-xl">UserName</label>
         <input className="border-2 border-black m-2" value={loggedInUser} onChange={(e) => {setuserName(e.target.value)}}/>

            <div className="res-container"> 
              {resList.map((items) => (
                items.promoted? <RestaurantCardPro  key ={items.id} resData ={items} />:<ResCard key ={items.id} resData ={items}/>
              ))}
            </div>
        </div>
    ) : <h2> offline son of bitch</h2>
}
 export default Body


 