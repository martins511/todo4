import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const About = () => {
  const[data, setData] = useState([])
  const[isLoading, setIsLoading]= useState(true)


  useEffect(()=>{
    axios.get("http://localhost:4000/superhero").then(res=>{
      setData(res.data)
      setIsLoading(false)
    })
  },[])
  if(isLoading){
    return <h2>Is loding......</h2>
  }

  return (
    <div>
      {
        data.map((x)=>(
          <h3 key={x.id}><Link to={`/about/${x.id}`}>{x.name}</Link></h3>
        ))
      }
    </div>
  )
}

export default About
