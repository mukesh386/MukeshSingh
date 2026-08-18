import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "./data.js";
import ResCatgeory from "./ResCatgeory.jsx";

const newData = cards[4].groupedCard.cardGroupMap.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) 
  console.log("newData" ,newData)

const ResMenu = () => {
const [Menu ,setMenu] = useState([])
const [showIndex ,setShowIndex] =useState(null)
useEffect(() => {
    setMenu(newData)
})

    return (
        <div className="text-center"        > 
            <h1 className="font-bold"> Hub.. is  Hub ..</h1>
            <h2 className="font-semibold"> enjoy your life with us</h2>

            <h2> This is our menu ok buddy ...</h2>
            <div> 
                //map function that map on our data and create an accoridation
            {Menu.map((items ,index) => <ResCatgeory data = {items?.card?.card}
                showItems ={index===showIndex?true:false}
                setShowIndex ={() => setShowIndex(index)}
                
             />)}
                   
            </div>
        </div>
    )
}
export default ResMenu;
