import { useEffect } from "react"
// this is cutstom hook for fetch menu  logic 
 /**
 *  task for  today 
 * chnage api end point 
 */
const useMenu = () => {
    useEffect(() => {
        fetchData()
    })
    const fetchData = async ()  =>{
        const data = await fetch("http://localhost:3000/menu")
    }
}



/**
 *  
 * 
 * 
 * 
 * 
 * 
 */