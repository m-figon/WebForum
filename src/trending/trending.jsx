  
import React,{Component} from 'react';
import './trending.css';
import trend from './trending.json';
class Trending extends Component{
    render(){
        const display= trend.map((item)=>
                <div class="trend">
                    <img src={item.src}/>
                    <div class="img-txt">
                        <h2>{item.user}</h2>
                        <h1>{item.post}</h1>
                    </div>
                </div>
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