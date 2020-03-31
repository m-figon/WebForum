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

    }
    searchBarChange(e){
        this.setState({
            searchValue: e.target.value
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