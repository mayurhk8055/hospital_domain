import axios from 'axios'
import React from 'react'

const Abc = () => {

    
    
    const Abcd = async() => {
      
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        console.log(res.data)
    
        
    }
    
  
    
   
  return (
    <div>
      
    </div>
  )
}

export default Abc
