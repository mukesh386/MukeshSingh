import { useEffect, useState } from "react"

const  useResList = () => {
    const [resList ,setResList] = useState([])
  useEffect(() => {
   fetchData()
  } ,[])
  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/user`)
    const json = await data.json();
    setResList(json)

  }
  return resList
}
export default useResList