import React from 'react';
import { Component } from 'react';
import './comments.css';
class Comments extends Component {
    constructor() {
        super();
        this.state = {
            commentValue: ""
        }
    }
    commentValueChange(e) {
        this.setState({
            commentValue: e.target.value
        })
    }
    enterComment(value1, value2) {
        this.props.commentHandler(value1, value2);
        this.setState({
            commentValue: ""
        })
    }
    render() {
        //console.log(this.props.json[this.props.idNumber].comments);
        var display;
        if (this.props.commentState) {
            display = this.props.json[this.props.idNumber].comments.map((item) => {

                return (
                    <div class="comment">
                        <h2>{item.user}{this.props.commentDate(item.date)}</h2>
                        <h1>{item.content}</h1>
                    </div>
                );
            });
        } else {
            display = null;
        }
        if (this.props.logedAcc !== "") {
            return (
                <>
                    {display}
                    <div class="users-comment">
                        <h1>{this.props.logedAcc}</h1>
                        <input type="text" onChange={(e) => this.commentValueChange(e)} value={this.state.commentValue} />
                        <button onClick={() => this.enterComment(this.state.commentValue, this.props.idNumber)}>Comment</button>

                    </div>
                </>
            );
        } else {
            return (
                <>
                    {display}
                </>
            );
        }

    }

}
export default Comments
