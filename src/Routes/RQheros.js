import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
const RQheros = () => {
    const {data,isLoading} = useQuery("super", ()=>{
          return  axios.get("http://localhost:4000/superhero")
    })

    if(isLoading){
        return <h2>Is loading .....</h2>
    }
  return (
    <div>
      {
        data?.data.map(x=>(
            <h3 key={x.id}><Link to={`/about/${x.id}`}>{x.name}</Link></h3>
        ))
      }
    </div>
  )
}

export default RQheros

