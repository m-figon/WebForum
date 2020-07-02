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
            tmpJson: ""
        }
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(type, e) {
        this.setState({
            [type]: e.target.value
        })
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
            fetch('https://rocky-citadel-32862.herokuapp.com/Forum/Users', {
                method: 'POST',
                body: JSON.stringify({
                    user: this.state.account,
                    password: this.state.password,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
        }
    }
    render() {
        if (!this.props.register) {
            return (null);
        } else {
            return ReactDOM.createPortal(
                <div class="registration">
                    <div class="register-form">
                        <div>
                            <div class="cancel-button-2">
                                <button onClick={() => this.props.setStateHandler("register", false)}>X</button>
                            </div>
                            <InputForm display="account name" id="account" type="text" value={this.state.account} inputChange={this.inputChange} tooltipId="hiddenTooltip1" tooltip="Please enter correct account name" />
                            <InputForm display="e-mail adress" id="email" type="text" value={this.state.email} inputChange={this.inputChange} tooltipId="hiddenTooltip2" tooltip="Please enter correct email adress" />
                            <InputForm display="password" id="password" type="password" value={this.state.password} inputChange={this.inputChange} tooltipId="hiddenTooltip3" tooltip="Please enter correct password" />
                            <InputForm display="confirm password" id="password2" type="password" value={this.state.password2} inputChange={this.inputChange} tooltipId="hiddenTooltip4" tooltip="Please confirm your password" />
                            <div className="button-div">
                                <button onClick={() => this.displayData()}>Register</button>

                            </div>

                        </div>

                    </div>
                </div>
            ,document.getElementById('portal-root'));
        }

    }
}
export default SignUp;