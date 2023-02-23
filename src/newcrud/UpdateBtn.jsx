import axios from 'axios';
import React, { Component } from 'react'

export class UpdateBtn extends Component {
  constructor(props) {
    console.log(props.updatePostD.userId);
    super(props)

    this.state = {
      userId: props.updatePostD.userId,
      title: props.updatePostD.title,
      body: props.updatePostD.body

    }
  }
  SbmitUpdatedata = async (event) => {
    event.preventDefault();
    const a = await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.props.updatePostD.id}`, {
      body: JSON.stringify({
        id: this.state.id,
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body,
        
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
     if(a.status===200){
    alert('Your data successfully updated..!')
     }
     this.props.updatePostFlag(false);
  }

  render() {
    return (
      <div>
      
        {/* {JSON.stringify(this.props.updatePostD)} */}

        <div>
          <form onSubmit={this.SbmitUpdatedata}>
            <div>
              <h3>update posts</h3>
            </div>
            <div className='mrgbtm'>
              User id : <input type="text" className='mrgright' value={this.state.userId} onChange={(e) => this.setState({ userId: e.target.value })} />
              Title : <input type="text" className='mrgright' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} /><br/>
              Body : <input type="text" className='mrgright' value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })} />
            </div>
            <div className='mrgbtm'>
              <button type='submit'className='uppost' > Update post</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UpdateBtn
