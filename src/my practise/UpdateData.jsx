import React, { Component } from 'react'

export class UpdateData extends Component {
    constructor(props) {
        // console.log(props.c.userId);
        super(props)

        this.state = {
            userId:props.c.userId,
            title:props.c.title,
            body:props.c.body

        }
    }

    render() {
        console.log("render");
        return (
            <>
            {/* {JSON.stringify(this.props.c)} */}
                <div>
                    <form >
                        <div>
                            <h2>update post</h2>
                        </div>
                        <div>
                            UserId: <input type="text" value={this.state.userId} onChange={(e)=>this.setState({userId:e.target.value})}/>
                            Title: <input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
                            Body: <input type="text" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})}/>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>

            </>

        )
    }
}

export default UpdateData
