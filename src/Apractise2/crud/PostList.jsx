import axios from 'axios'
import React, { Component } from 'react'
import DeletePost from './DeletePost'
import './main.css'
export class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            PostData: []
        }
    }

    async componentDidMount() {
        const m = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(m);
        this.setState({
            PostData:m.data
        })
    }

    render() {
        return (
            <div>
                <div className='center'><h2>POST TABLE</h2></div>
                <>

                    <table>
                        <thead>
                            <tr>
                                <th>USER ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.PostData.map((items,index)=>{
                                 return(
                                    <tr key={index} >
                                        <td>{items.userId}</td>
                                        <td>{items.title}</td>
                                        <td>{items.body}</td>
                                        <td><DeletePost id={items.id}/></td>

                                    </tr>
                                )
                            })
                            }
                               
                            
                        </tbody>
                    </table>
                </>

            </div>
        )
    }
}

export default PostList
