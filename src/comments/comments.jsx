import React from 'react';
import { Component } from 'react';
class Comments extends Component{
    render(){
        var display;
        try{
        this.props.json.map((item)=>{
           
               display=item.comments.map((value)=>{
                    return(
                        <h1>{value.content}</h1>
                    );
                    
                    })
            
            
        
        
    
        
            
            
        });
        }catch(e){
            console.log(e);
        }
        console.log(display);
        return(
           null
        );
    }
    
}
export default Comments
