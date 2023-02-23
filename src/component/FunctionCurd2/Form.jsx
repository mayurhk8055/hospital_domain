import React, { useContext, useState } from 'react'
import { userConst } from './FormStore';


const Form = (props) => {
    const {getdata}=useContext(userConst);
    const [user, setuser] =useState({
        id:"",
        name:"",
        mobile:"",
        email:""
    })
    const abc=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuser({...user,[name]:value})
    }
    const saveSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
        getdata.saveSubmit(user);
        props.element('formlist')
        

    }
    
  return (
        <div className='App'>
            <form onSubmit={saveSubmit}>
                Id: <input type="text" name='id' value={user.id} onChange={(e)=>abc(e)}/>
                Name: <input type="text" name='name' value={user.name} onChange={(e)=>abc(e)}/>
                Mobile: <input type="text" name='mobile' value={user.mobile} onChange={(e)=>abc(e)}/>
                Email: <input type="text" name='email' value={user.email} onChange={(e)=>abc(e)}/>

                <button type='submit'>SUBMIT</button>

            </form>


        </div>
    )
}

export default Form
