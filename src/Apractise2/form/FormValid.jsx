// import React, { Component } from 'react'

// export class FormValid extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             password: '',
//             confirmPassword:'',
//             nameError: '',
//             passwordError: '',
//             confirmPsswordError:''

//         }
//     }
//     valid()
//     {
//         if (!this.state.name.includes("@") && this.state.password.length <5) {

//             this.setState({nameError:"Invalid Name", passwordError:"please must be more than 5 character."})

//         }
//         else if (!this.state.name.includes("@") ) {
//             this.setState({nameError:"Invalid Name"})
//         }
//        else if ( this.state.password.length <5) {
//             this.setState({ passwordError:"please must be more than 5 character."})
//             // this.setState({password:confirmPassword})

//         }
//         else if(this.state.password !== this.state.confirmPassword)
//         {
//             // this.setState({confirmPasswordError:"sgdjgdgdgf"})
//             alert("Don't match Password")
//         }
//         else{
//             return true
//         }
//     }
//     submit() {
//         this.setState({nameError:" ", passwordError:" "})
//         if (this.valid()) {
//             alert("form has been submited")
//             console.log("both correct")
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input type="text" name="user" onChange={(e)=>this.setState({name:e.target.value})}/>
//                     <p style={{color:"red", fontsize:"16px"}}>{this.state.nameError}</p>
//                     <br /> <br />
//                     <input type="password" name='password'onChange={(e)=>this.setState({password:e.target.value})}/>
//                     <p style={{color:"red", fontsize:"16px"}}>{this.state.passwordError}</p>
//                     <br /> <br />
//                     <input type="password" name='confirmPassword'onChange={(e)=>this.setState({confirmPassword:e.target.value})}/>
//                     <p style={{color:"red", fontsize:"16px"}}>{this.state.confirmPsswordError}</p>
//                     <br /> <br />

//                     <button onClick={() =>this.submit()}>Submit</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default FormValid

import React, { useState } from 'react'

const FormValid = (props) => {
  const [user, setuser] = useState({
    name: "",
    password: "",
    confirmPass: "",
    nameError:"",
    passwordError:"",
    confirmPsswordError:""


  })
  const abc=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
    setuser({...user,[name]:value})

  }
  const valid=()=>{
    if(!user.name.includes("@") && user.password.length<5)
    {
      setuser({nameError:"Invalid Name",passwordError:"Invalid password"})
    }else if(!user.name.includes("@") )
    {
      setuser({nameError:"Invalid Name"})

    }else if(user.password.length<5)
    {
      setuser({passwordError:"Invalid password"})
    }else if(user.password != user.confirmPass)
    {
      setuser({confirmPsswordError:"Did not match password"})
      
    }
    else{
      return true
    }

  }
 const submit=()=>{
  setuser({nameError:" ",passwordError:""})
  if(valid())
  {
    alert("form submited")
  }
    
  }
  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={(e)=>abc(e)} />
      <p style={{ color: "red", fontsize: "16px" }}>{user.nameError}</p>
      <br /> <br />
      <input type="password" name='password' value={user.password} onChange={(e)=>abc(e)}/>
      <p style={{ color: "red", fontsize: "16px" }}>{user.passwordError}</p>
      <br /> <br />
      <input type="password" name='confirmPass' value={user.confirmPass} onChange={(e)=>abc(e)}/>
      <p style={{ color: "red", fontsize: "16px" }}>{user.confirmPsswordError}</p>
      <br /> <br />

      <button onClick={() =>submit()}>Submit</button>
    </div>
  )
}

export default FormValid

