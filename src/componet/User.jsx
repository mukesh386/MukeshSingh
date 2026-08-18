// class based comp
import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        //console.log(typeof props)
        console.log( this.props.name +"consttructure")
        this.state ={
            
            userInfo:{
                name:"dummy name",
                location:"dummy ",
                avatar_url:"dummy avatar"

            }

        }
        
    }
    async componentDidMount() {
        console.log("is componet did mount")
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    render() {
        const {name ,location ,age} = this.props
        console.log( this.props.name +"render")
        return (
            <div> 
                <h2> This is class based compoent</h2>
                <h3> Hi love</h3>
                
                
                
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h2> {age}</h2>
                <h1> {this.state.userInfo.name}</h1>
                <h2>{this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url} />
            </div>
        )
    }
}
export default User