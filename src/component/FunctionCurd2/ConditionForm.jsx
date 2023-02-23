import React, { useState } from 'react'
import Form from './Form'
import FormList from './FormList'
import UpdateForm from './UpdateForm'

const ConditionForm = () => {
    const [hide,sethide]=useState("formlist")
  return (
    <div>
        <div>
            <button onClick={()=>sethide("form")}>ADD NEW USER</button>
        </div>
        {
            hide=="form" ? <Form element ={sethide}/> :null
        }
        {
            hide=="formlist" ? <FormList element ={sethide}/>:null
        }
        {
            hide=="updateform" ? <UpdateForm element ={sethide}/>:null
        }
      
    </div>
  )
}

export default ConditionForm
