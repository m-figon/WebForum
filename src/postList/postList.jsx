import React,{Component} from 'react';
import './postList.css';
import posts from './postList.json';
import commentImg from './orangeText.png';
import up from './orangeUp.png';
import down from './orangeDown.png';

class PostList extends Component{
    render(){
        const display= posts.map((item)=>
                <div class="post">
                        <div class="post-desc">
                            <div class="left">
                                <h1>{item.title} by {item.user}</h1>
                            </div>
                            <div class="right">
                            <h2 id="section">{item.section}</h2>
                                <h2>{item.points} Points {item.comments} Comments</h2>
                            </div>
                        </div>
                        <p>{item.post}</p>
                        <div class="img">
                            <img src={item.src}/>
                        </div>
                        <div class="post-buttons">
                             <img src={up}/>
                            <img src={down}/>
                            <img src={commentImg}/>
                        </div>
                        


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
