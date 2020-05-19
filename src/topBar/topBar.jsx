import "./topBar.css";
import React, { Component } from 'react';
import logo from './lollipop.png';
import searchImg from './search.png';
function TopBar(props) {
    function clickFun() {
        if (props.operation === "Log out") {
            props.setStateHandler("logedAs", "", "loginOrRegister", "Log in");
            console.log("log out handler");
        } else if (props.operation === "Log in") {
            props.setStateHandler("login", true, null, null);
            console.log("log in handler");

        }
    }

    return (
        <div class="top-bar">
            <div class="left" onClick={() => props.setStateHandler("section", "section", "tmpSearch", "", "search", "")}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 id="reset">ReactForum</h1>
            </div>
            <div class="middle">
                <input type="text" onChange={(e) => props.selectOrInputHandler("search", e)} value={props.searchValue} /><button type="button" onClick={props.searchSubmitHandler}><img src={searchImg} /></button>
            </div>
            <div class="right">
                <select value={props.selectValue} onChange={(e) => props.selectOrInputHandler("section", e)}>
                    <option value="section">section</option>
                    <option value="curiosities">curiosities</option>
                    <option value="fit">fit</option>
                    <option value="food">food</option>
                    <option value="films">films</option>
                </select>
                <h1 id="log-in">{props.logedAc}</h1>
                <h1 id="log-in" onClick={() => clickFun()}>{props.operation}</h1>
                <h1 id="sign-up" onClick={() => props.setStateHandler("register", true)}>Sign up</h1>
            </div>
        </div>
    );


}
export default TopBar;