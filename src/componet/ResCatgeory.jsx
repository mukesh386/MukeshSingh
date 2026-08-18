import { useState } from "react";
import ItemList from "./ItemList";

const ResCatgeory = ({data ,showItems ,setShowIndex}) => {
   // console.log("Data " ,data)

const handleClick = () =>{
    setShowIndex()
}


    return (
        <div> 
            
          <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 " onClick={handleClick} > 
          <div className="flex justify-between"> <span className="font-bold text-lg"> {data.title} ({data?.itemCards?.length}) </span>
          <span>⏬ </span>  
          </div>
          
         { showItems&&<ItemList data ={data?.itemCards}/>}
          </div>
            {/** header */}
            {/* body is here bro* */}
        </div>
    )
}
export default ResCatgeory;