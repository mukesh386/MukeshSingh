import { Link } from "react-router-dom";
import userContext from "../utilts/userContext.js";
import { useContext } from "react";
import { useSelector } from "react-redux";
//  this function based component for our header compoent 
// 
const Header =() => {

    const {loggedInUser} =useContext(userContext)
    console.log(loggedInUser)
     const CartItems  = useSelector((store) =>store.cart.items)
     console.log(CartItems)
    return (
        <div className="flex justify-between border-2"> 
            <div> 
                <img className="h-20 w-20"  src="logo.jpeg"/>
            </div>
            <div> 
                <ul className="flex justify-between space-x-50 font-bold text-3xl"> 
                    <li>Home</li>
                  <Link to="/about"><li> Abouts Us</li></Link>   
                 <Link to ="/grocery"><li> grocery</li></Link>  
                 // this link just show cart items and hwo many items are in this cart conatiner
                   <Link to ="/Cart"><li> Cart ({CartItems.length})</li> </Link>
                   // this show as infromation about login user
                    <li> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;