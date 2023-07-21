import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

const Path = () => {
    const location = useLocation();
  return (
    <div>
        
      <h2>Current pathname: {location.pathname}</h2>
      <h2>Current search: {location.search}</h2>
      <h2>Current hash: {location.hash}</h2>
    </div>
    
  )
}

export default Path
