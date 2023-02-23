import axios from 'axios'
import React, { Component } from 'react'
import DeletePost2 from './DeletePost2'

export class PostList2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PostData: [],
            updateData:{},
            updateFlag:true
        }
    }
    async componentDidMount() {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(result);
        this.setState({
            PostData: result.data
        })
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.state.PostData)} */}
                <div><h2>Post Table</h2></div>
                <>
                    <table>
                        <thead>
                            <th>USERID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </thead>
                        <tbody>
                            {this.state.PostData.map((i, index) => {
                                return(
                                <tr key={index}>
                                    <td>{i.userId}</td>
                                    <td>{i.title}</td>
                                    <td>{i.body}</td>
                                    <td><DeletePost2 id={i.id}/></td>

                                </tr>
                                )
                            }
                            )}


                        </tbody>
                    </table>
                </>

            </div>
        )
    }
}

export default PostList2
