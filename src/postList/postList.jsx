import React,{Component} from 'react';
import './postList.css';
import commentImg from './orangeText.png';
import up from './orangeUp.png';
import down from './orangeDown.png';
import Comments from '../comments/comments.jsx';
class PostList extends Component{
    constructor(){
        super();
        this.state=({
            comments: true,
        })
        this.commentsSwitch = this.commentsSwitch.bind(this);
        this.commentSwitchOutside=this.commentSwitchOutside.bind(this);
        this.pointsChange = this.pointsChange.bind(this);
    }
    commentsSwitch(){
        if(this.state.comments===true){
            this.setState({
                comments: false
            })
        }else {
            this.setState({
                comments: true
            })
        }
        console.log(this.state.comments);
    }
    commentSwitchOutside(value){
        this.props.clickOnSign(value);
        //link to comments by id
    }
    pointsChange(value,operation){
        //console.log(value);
        //console.log(this.state.jsonArray[value])
        this.setState(state => {
            const list = this.props.postListjson.map((item) => {
              if (item.id == value) {
                  if(operation=="+"){
                    item.points +=0.5;
                  }else if(operation=="-"){
                    item.points -=0.5;
                  }
                
              }
            });
            return {
                list,
              };
    })
}
    render(){
        
        const display= this.props.postListjson.map((item)=>{
            if((this.props.selectValue==="none" && this.props.searchValue==item.title)){
                return(<div class="post">
                <div class="post-desc">
                    <div class="left">
                        <h1>{item.title} by {item.user}</h1>
                    </div>
                    <div class="right">
                        <h2 id="section" onClick={()=>this.props.clickHandler(item.section)}>{item.section}</h2>
                        <h2>{item.points} Points {item.commentsQuantity} Comments</h2>
                    </div>
                </div>
                <p>{item.post}</p>
                <div class="img">
                    <img src={item.src}/>
                </div>
                <div class="post-buttons">
                    <img onClick={()=>this.pointsChange(item.id,"+")} src={up}/>
                    <img onClick={()=>this.pointsChange(item.id,"-")} src={down}/>
                    <img onClick={this.commentsSwitch} src={commentImg}/>
                </div>
                <Comments logedAcc={this.props.logedName} commentState={this.state.comments} idNumber={item.id} json={this.props.postListjson}/>
            </div>);
            }
            else if(this.props.selectValue==="section" || (this.props.selectValue==="curiosities" && item.section=="curiosities") || 
            (this.props.selectValue==="fit" && item.section=="fit") || 
            (this.props.selectValue==="food" && item.section=="food")|| 
            (this.props.selectValue==="films" && item.section=="films")){
                return(<div class="post">
                <div class="post-desc">
                    <div class="left">
                        <h1 id="post-title" onClick={()=>this.props.clickOnSign(item.title)}>{item.title} by {item.user}</h1>
                    </div>
                    <div class="right">
                        <h2 id="section" onClick={()=>this.props.clickHandler(item.section)}>{item.section}</h2>
                        <h2>{item.points} Points {item.commentsQuantity} Comments</h2>
                    </div>
                </div>
                <p>{item.post}</p>
                <div class="img">
                    <img src={item.src}/>
                </div>
                <div class="post-buttons">
                    <img onClick={()=>this.pointsChange(item.id,"+")} src={up}/>
                    <img onClick={()=>this.pointsChange(item.id,"-")} src={down}/>
                    <img onClick={()=>this.props.clickOnSign(item.title)} src={commentImg}/>
                </div>
            </div>
            );
            }
            
        });
        if(this.props.selectValue==="none"){
            return(
                <div class="post-list-display">
                    <div class="post-list">
                        {display}
                    </div>
                </div>
            );
        }
        else{
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
    
}
export default PostList;
