import React, { useState } from 'react'
import AddNewForm from './AddNewForm'
import EmpList from './EmpList'
import UpdateForm from './UpdateForm'

const Conditions = () => {
    const [hide, sethide] = useState('emplist')
    return (
        <div>
            <div>
                <button onClick={()=>sethide('addnewform')}>Add New Emp</button>
            </div>
            <div>
               
                {
                    hide=='addnewform'?<AddNewForm element={sethide}/>:null
                }
                {
                    hide=='emplist'?<EmpList element={sethide}/>:null
                }
                {
                    hide=='updateform'?<UpdateForm element={sethide}/>:null
                }
            </div>
        </div>
    )
}

export default Conditions
