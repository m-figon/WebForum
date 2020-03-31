  
import React,{Component} from 'react';
import './trending.css';
import postList from '../postList/postList.json';
class Trending extends Component{
    render(){
        const display= postList.map((item)=>{
            if(item.points>1000){
                return(
                    <div class="trend" onClick={()=>this.props.clickHandler(item.title)}>
                    <img src={item.src}/>
                    <div class="img-txt">
                        <h2>{item.user}</h2>
                        <h1>{item.title}</h1>
                    </div>
                    </div>
                    ); }
            }   
        );
        return(
            <div class="trending-display">
                <div class="trending-sign">
                    <h1>Top of the week</h1>
                </div>
                
                <div class="trending">
                    {display}
                </div>
            </div>
    
        );
    }
    
}
export default Trending;