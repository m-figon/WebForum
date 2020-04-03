import React from 'react';
import { Component } from 'react';
import './comments.css';
class Comments extends Component{
    render(){
        //console.log(this.props.json[this.props.idNumber].comments);
        var display;
        if(this.props.commentState==true){
            display=this.props.json[this.props.idNumber].comments.map((item)=>{
                return(
                    <div class="comment">
                    <h2>{item.user}</h2>
                    <h1>{item.content}</h1>
                    </div>
                );
    });
        }else{
            display=null;
        }
        
        return(
           display
        );
    }
    
}
export default Comments
