import React from 'react'

const  JsxMethod =()=> {
    // using jsx syantax
    let a=12, b=20;
  return (
    <div>
      <h1>hello jsx function method</h1>
      <h3>addition of two numbers {a+b}</h3>
      <h2>condtional statement : {a>30 ? 'ais greater ' : 'A is less than '}</h2>

    </div>
  )
//   without using jsx
// React.createElement('string name of element ', property,value in string)
//     return React.createElement('div',null,React.createElement('h1',null,'hello, my name is rahul'))
}

export default JsxMethod
