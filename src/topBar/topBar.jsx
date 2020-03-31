import "./topBar.css";
import React, {Component} from 'react';
import logo from './lollipop.png';
import searchImg from './search.png';
class TopBar extends Component{
    constructor(){
        super();
        this.state={
            
        }

    }
    
    
    componentDidUpdate(){
        setInterval(()=>
        {
            //changing topic
        },1000)
    }
    render(){
        return(
            <div class="top-bar">
                <div class="left">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 id="reset" onClick={this.props.reset}>ReactForum</h1>
                </div>
                <div class="middle">
                <input type="text" onChange={(e)=>this.props.searchHandler(e)} value={this.props.searchValue}/><button type="button" onClick={this.props.searchSubmitHandler}><img src={searchImg}/></button>
                </div>
                <div class="right">
                    <select value={this.props.selectValue} onChange={(e)=>this.props.selectHandler(e)}>
                        <option value="section">section</option>
                        <option value="curiosities">curiosities</option>
                        <option value="fit">fit</option>
                        <option value="food">food</option>
                        <option value="films">films</option>
                    </select>
                    <h1 id="log-in">Log in</h1>
                    <h1 id="sign-up">Sign up</h1>

                </div>
            </div>
        );
    }
    
}
export default TopBar;