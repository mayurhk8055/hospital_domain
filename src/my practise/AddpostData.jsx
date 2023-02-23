import axios from 'axios';
import React, { Component } from 'react'

class AddpostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',


        }
    }
    submitData =async (event) => {
        event.preventDefault();
        // postMethod
        const b = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                userId: this.state.userId,
                title: this.state.title,
                body: this.state.body,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
        if(b.status=== 201){
            alert("data successfully added........")
        }
        this.props.ab(true)
        console.log(b);
        
    }

    render() {
        return (
            <div>
                <div><h4>add post data</h4></div>
                <div>
                    <form onSubmit={this.submitData}>
                        <div>

                            userId : <input type="number" value={this.userId} onChange={(e) => this.setState({ userId: e.target.value })} />
                            title : <input type="text" value={this.title} onChange={(e) => this.setState({ title: e.target.value })} />
                            body : <input type="text" value={this.body} onChange={(e) => this.setState({ body: e.target.value })} />
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        )
    }
}

export default AddpostData
