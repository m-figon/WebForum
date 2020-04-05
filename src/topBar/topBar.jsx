import "./topBar.css";
import React, { Component } from 'react';
import logo from './lollipop.png';
import searchImg from './search.png';
class TopBar extends Component {
    clickFun() {
        if (this.props.operation === "Log out") {
            this.props.setStateHandler("logedAs", "", "loginOrRegister", "Log in");
            console.log("log out handler");
        } else if (this.props.operation === "Log in") {
            this.props.setStateHandler("login", true, null, null);
            console.log("log in handler");

        }
    }
    render() {
        return (
            <div class="top-bar">
                <div class="left">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 id="reset" onClick={() => this.props.setStateHandler("section", "section", "tmpSearch", "", "search", "")}>ReactForum</h1>
                </div>
                <div class="middle">
                    <input type="text" onChange={(e) => this.props.selectOrInputHandler("search", e)} value={this.props.searchValue} /><button type="button" onClick={this.props.searchSubmitHandler}><img src={searchImg} /></button>
                </div>
                <div class="right">
                    <select value={this.props.selectValue} onChange={(e) => this.props.selectOrInputHandler("section", e)}>
                        <option value="section">section</option>
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