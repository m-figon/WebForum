import "./topBar.css";
import React, { Component } from 'react';
import logo from './lollipop.png';
import searchImg from './search.png';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            searched: "Search for post",
            redirect: false,
            redirectValue: "",
            posts: []
        }
    }
    componentDidMount(){
            fetch("https://rocky-citadel-32862.herokuapp.com/Forum/Posts")
              .then(response => response.json())
              .then(json => {
                this.setState({
                  posts: json
                });
              })
    }
    clickFun() {
        if (this.props.operation === "Log out") {
            this.props.setStateHandler("logedAs", "", "loginOrRegister", "Log in");
            console.log("log out handler");
        } else if (this.props.operation === "Log in") {
            this.props.setStateHandler("login", true, null, null);
            console.log("log in handler");
        }
    }
    redirectFunc(value) {
        this.setState({
            redirect: true,
            redirectValue: value
        })
    }
    searchFunc(){
        this.state.posts.map((item)=>{
            if(item.title.toLowerCase()===this.state.searched.toLowerCase()){
                this.setState({
                    redirect: true,
                    redirectValue: "post/"+item.id
                })
               console.log(item.id);
            }
        })
    }
    inputChange(e) {
        this.setState({
            searched: e.target.value
        })
    }
    focus() {
        if (this.state.searched === "Search for post") {
            this.setState({
                searched: ""
            })
        }
    }
    blur() {
        if (this.state.searched === "" || this.state.searched === " ") {
            this.setState({
                searched: "Search for post"
            })
        }
    }
    render() {
        console.log(this.state.redirect);
        if (this.state.redirect) {
            console.log(this.state.redirectValue);
            this.state.redirect=false;
            return <Redirect push to={"/" + this.state.redirectValue} />;
        }
        return (
            <div class="top-bar">
                <div class="left-part" onClick={() => this.props.setStateHandler("section", "section", "tmpSearch", "", "search", "")}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link to={`/main`} style={{ textDecoration: 'none' }} activeClassName="active">
                        <h1 id="reset">ReactForum</h1>
                    </Link>
                </div>
                <div class="middle">
                    <input type="text" onFocus={() => this.focus()} onBlur={() => this.blur()} onChange={(e) => this.inputChange(e)} value={this.state.searched} /><button type="button" onClick={() => {
                this.searchFunc() }}><img src={searchImg} /></button>
                </div>
                <div class="right-part">
                    <select value={this.props.selectValue} onChange={(e) => {
                        console.log(e.target.value);
                        this.redirectFunc(e.target.value)
                    }}>
                        <option value="main">section</option>
                        <option value="curiosities">curiosities</option>
                        <option value="fit">fit</option>
                        <option value="food">food</option>
                        <option value="films">films</option>
                    </select>
                    <h1 id="log-in">{this.props.logedAc}</h1>
                    <h1 id="log-in" onClick={() => this.clickFun()}>{this.props.operation}</h1>
                    <h1 id="sign-up" onClick={() => this.props.setStateHandler("register", true)}>Sign up</h1>
                </div>
            </div>
        );
    }



}
export default TopBar;