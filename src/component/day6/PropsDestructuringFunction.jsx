import React from 'react'

function PropsDestructuringFunction({name,city,company}) {
    
  return (
    <div>
       <h1>Props Destructuring in functional component</h1>
       <h3>Name : {name}</h3>
       <h3>City : {city}</h3>
        <h3>Company :{company}</h3>

    </div>
  )
}

export default PropsDestructuringFunction
