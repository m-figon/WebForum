import "./topBar.css";
import React, {Component} from 'react';
import logo from './logo.svg';
import searchImg from './search.png';
class TopBar extends Component{
    constructor(){
        super();
        this.state={
            searchValue: ""
        }
        this.searchBarChange = this.searchBarChange.bind(this);
    }
    searchBarChange(e){

        this.setState({
            searchValue: e.target.value
        })
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
                    <button id="log-in"><h1 id="log-in">Log in</h1></button>
                    <button id="sign-up"><h1 id="sign-up">Sign up</h1></button>

                </div>
            </div>
        );
    }
    
}
export default TopBar;