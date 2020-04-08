import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './signIn.css';
import InputForm from '../signUp/inputForm.jsx'
class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            account: "",
            password: "",
            passwordType: "password",
        }
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(type, e) {
        this.setState({
            [type]: e.target.value
        })
    }
    passwordTypeChange() {
        if (this.state.passwordType === "password") {
            this.setState({
                passwordType: "text"
            })
        } else if (this.state.passwordType === "text") {
            this.setState({
                passwordType: "password"
            })
        }
    }
    propertyChange(id, idValue, classValue) {
        try {
            const node = ReactDOM.findDOMNode(this);
            const child = node.querySelector(id);
            if (!idValue) {
                child.className = classValue;
            }
            if (!classValue) {
                child.id = idValue;
            }
        } catch (e) {
            console.log(e);
        }
    }
    displayData() {
        var correctFlag = false;
        this.props.json.map(item => {
            if (this.state.account === item.user && this.state.password === item.password) {
                this.propertyChange("#account", "correct-ac", null);
                this.propertyChange("#incorrect-ac", "correct-ac", null);
                this.propertyChange("#visibleTooltip1", "hiddenTooltip1", null);
                this.propertyChange("#password", "correct-pass", null);
                this.propertyChange("#incorrect-pass", "correct-pass", null);
                correctFlag = true;
                this.props.setStateHandler("logedAs", this.state.account, "loginOrRegister", "Log out");
            }
        })
        if (!correctFlag) {
            this.propertyChange("#hiddenTooltip1", "visibleTooltip1", null);
            this.propertyChange("#correct-ac", "incorrect-ac", null);
            this.propertyChange("#account", "incorrect-ac", null);
            this.propertyChange("#correct-pass", "incorrect-pass", null);
            this.propertyChange("#password", "incorrect-pass", null);
        }
    }
    render() {
        if (!this.props.login) {
            return (null);
        } else {
            return (
                <div class="registration">
                    <div id="login" class="app-form">
                        <div class="cancel-button">
                            <button onClick={() => this.props.setStateHandler("login", false)}>X</button>
                        </div>
                        <form id="form">
                            <InputForm display="account name" id="account" type="text" value={this.state.account} inputChange={this.inputChange} tooltipId="hiddenTooltip1" tooltip="Please enter correct account name and password"/>
                            <InputForm display="password" id="password" type={this.state.passwordType} value={this.state.password} inputChange={this.inputChange} tooltipId="" tooltip=""/>
                            <button type="button" id="show" onClick={() => this.passwordTypeChange()}>SHOW</button>
                        </form>
                        <button onClick={() => this.displayData()}>Login</button>
                    </div>
                </div>
            );
        }

    }
}
export default SignIn;