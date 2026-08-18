

import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utilts/cartSlice";


const ItemList = ({data}) => {
 const dispatch = useDispatch()
 const handleClick =(item) => {
     dispatch(addItems(item))
 }
    return  (
        <div> 
            {data.map(item => <div key ={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left" > 
                <div> 
                                      
 
                    <button className="mx-6 bg-black text-white shadow-lg absolute" onClick ={()=>handleClick(item)}> ADD</button>
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${item.card.info.imageId}`} className="w-14"/>
                  
                 </div>
                <div>
                     <span> {item.card.info.name} </span>
                <span> ₹{item.card.info.defaultPrice/100 ||item.card.info.price/100}</span></div> 
                <div>
                    <h2 className="text-xs "> {item.card.info.description}</h2>
                </div>
            </div>)}
        </div>
    )
        
    
}

export default ItemList;