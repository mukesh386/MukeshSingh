import User from "./User"
import React from "react"
import userContext from "../utilts/userContext.js"
class About extends React.Component{
    constructor(props){
       super(props)
       console.log("parent Constructure")
       
    }


 componentDidMount() {
        console.log(" papa is componet did mount")
    }


    render(){
        console.log("parent Render")
        return(
            <div> 
                <div>
                <userContext.Consumer>
                    {(data) => console.log(data)}
                </userContext.Consumer> </div>
            <h2> this is about us buddy</h2>
            <User name ={"mukesh singh"} location ={"Rawatsar"} age ={23}/>

        </div>
        )
    }
}

export default About