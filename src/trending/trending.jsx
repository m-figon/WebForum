  
import React,{Component} from 'react';
import './trending.css';
class Trending extends Component{
    constructor(){
        super();
        this.state=({
            jsonArray: []
        })
    }
    componentDidMount(){
        fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(json =>{ 
            this.setState({
                jsonArray: json
            });
        })
    }
    render(){
        const display= this.state.jsonArray.map((item)=>{
            if(item.points>1000){
                return(
                    <div class="trend" onClick={()=>this.props.trendingClickHandler(item.title)}>
                    <img src={item.src}/>
                    <div class="img-txt">
                        <h2>{item.user}</h2>
                        <h1>{item.title}</h1>
                    </div>
                    </div>
                    );}
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