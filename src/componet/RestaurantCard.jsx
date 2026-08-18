const ResCard =({resData}) => {
    const {Name ,DeliveryTime ,img ,Rating ,price } = resData
    return (
        <div className="res-card"> 

            <img src= {img} />
            <h2> Name: {Name}</h2>
            <h3> Price :{price}</h3>
            <h3> Rating :{Rating}</h3>
            <h3> Time :{DeliveryTime}</h3>
            
        </div>
    )
}


export const withPromotedLabel =(ResCard) => {
    return (props) => {
        return (
            <div> 
                <label className="absolute bg-black text-white p-2">Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard