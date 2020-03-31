import "./topBar.css";
import React, {Component} from 'react';
import logo from './lollipop.png';
import searchImg from './search.png';
class TopBar extends Component{
    constructor(){
        super();
        this.state={
            searchValue: "",
            select: ""
        }
        this.searchBarChange = this.searchBarChange.bind(this);
        this.selectChange = this.selectChange.bind(this);

    }
    searchBarChange(e){
        this.setState({
            searchValue: e.target.value
        })
    }
    selectChange(e){
        this.setState({
            select: e.target.value
        })
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
                <h1>ReactForum</h1>
                </div>
                <div class="middle">
    
                <input type="text" onChange={(e)=>this.searchBarChange(e)}value={this.state.searchValue}/><button type="button"><img src={searchImg}/></button>
                </div>
                <div class="right">
                    <select value={this.state.select} onChange={(e)=>this.selectChange(e)}>
                        <option value="section">Section</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <h1 id="log-in">Log in</h1>
                    <h1 id="sign-up">Sign up</h1>

                </div>
            </div>
        );
    }
    
}
export default TopBar;