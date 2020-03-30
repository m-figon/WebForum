import React,{Component} from 'react';
import './postList.css';
import posts from './postList.json';
class PostList extends Component{
    render(){
        const display= posts.map((item)=>
                <div class="post">
                        
                        <h1>{item.title} by {item.user}</h1>
                        
                        
                        <p>{item.post}</p>
                        <img src={item.src}/>
                </div>
        );
        return(
            <div class="post-list-display">
                <div class="post-list-sign">
                    <h1>Posts</h1>
                </div>
                
                <div class="post-list">
                    {display}
                </div>
            </div>
    
        );
    }
    
}
export default PostList;