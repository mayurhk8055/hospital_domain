import axios from 'axios'
import React, { Component } from 'react'

export class AddNewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }
  onSbmitPostdata = async (event) => {
    event.preventDefault()
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {

      body: JSON.stringify({
        userId: this.state.userId,
        title: this.state.title,
        body: this.state.body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (response.status === 201) {
      alert("post data add succesfully")
    }

    this.props.updatePostFlag(true)
  }

  render() {
    return (
      <div>

        <form onSubmit={this.onSbmitPostdata}>
          <div>
            <h3>add new posts</h3>
          </div>
          <div className='mrgbtm' >
            User id : <input type="number" className='mrgright' value={this.state.userId} onChange={(e) => this.setState({ userId: e.target.value })} />
            Title : <input type="text" className='mrgright' value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} /><br/>            Body : <input type="text" className='mrgright' value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })} />
          </div>
          <div className='mrgbtm'>
            <button type='submit' > save button</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddNewPost
