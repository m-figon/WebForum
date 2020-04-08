import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../signIn/signIn.css';
import InputForm from "./inputForm.jsx";
class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            account: "",
            password: "",
            password2: "",
            email: "",
            passwordType: "password",
            tmpJson: ""
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
    validateInput(condition, variable, correct, incorrect, visible, hidden) {
        if (condition) {
            this.propertyChange('#' + variable, incorrect, null);
            this.propertyChange('#' + correct, incorrect, null);
            this.propertyChange('#' + hidden, visible, null);
            return false;
        } else {
            this.propertyChange('#' + variable, correct, null);
            this.propertyChange('#' + incorrect, correct, null);
            this.propertyChange('#' + visible, hidden, null);
            return true;
        }
    }
    displayData() {
        this.validateInput(this.state.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/) == null, "account", "correct-ac", "incorrect-ac", "visibleTooltip1", "hiddenTooltip1");
        this.validateInput(this.state.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/) == null, "email", "correct-email", "incorrect-email", "visibleTooltip2", "hiddenTooltip2");
        this.validateInput(this.state.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/) == null, "password", "correct-pass", "incorrect-pass", "visibleTooltip3", "hiddenTooltip3");
        this.validateInput((this.state.password2 !== this.state.password) || (this.state.password2 === ""), "password2", "correct-pass2", "incorrect-pass2", "visibleTooltip4", "hiddenTooltip4");
        if (this.validateInput(this.state.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/) == null, "account", "correct-ac", "incorrect-ac", "visibleTooltip1", "hiddenTooltip1") &&
            this.validateInput(this.state.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/) == null, "email", "correct-email", "incorrect-email", "visibleTooltip2", "hiddenTooltip2") &&
            this.validateInput(this.state.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/) == null, "password", "correct-pass", "incorrect-pass", "visibleTooltip3", "hiddenTooltip3") &&
            this.validateInput((this.state.password2 !== this.state.password) || (this.state.password2 === ""), "password2", "correct-pass2", "incorrect-pass2", "visibleTooltip4", "hiddenTooltip4")
        ) {
            const newArray = this.props.json.concat({
                id: this.props.json.length,
                user: this.state.account,
                password: this.state.password
            });
            this.props.setStateHandler("jsonArrayForm", newArray);
            //console.log(this.props.json);
        }
    }
    render() {
        if (!this.props.register) {
            return (null);
        } else {
            return (
                <div class="registration">
                    <div id="register" class="app-form">
                        <div class="cancel-button">
                            <button onClick={() => this.props.setStateHandler("register", false)}>X</button>
                        </div>
                        <form id="form">
                            <InputForm display="account name" id="account" type="text" value={this.state.account} inputChange={this.inputChange} tooltipId="hiddenTooltip1" tooltip="Please enter correct account name"/>
                            <InputForm display="e-mail adress" id="email" type="text" value={this.state.email} inputChange={this.inputChange} tooltipId="hiddenTooltip2" tooltip="Please enter correct email adress"/>
                            <InputForm display="password" id="password" type={this.state.passwordType} value={this.state.password} inputChange={this.inputChange} tooltipId="hiddenTooltip3" tooltip="Please enter correct password"/>
                            <InputForm display="confirm password" id="password2" type={this.state.passwordType} value={this.state.password2} inputChange={this.inputChange} tooltipId="hiddenTooltip4" tooltip="Please confirm your password"/>
                            <button type="button" id="show" onClick={() => this.passwordTypeChange()}>SHOW</button>

                        </form>

                        <button onClick={() => this.displayData()}>Login</button>
                    </div>
                </div>
            );
        }

    }
}
export default SignUp;