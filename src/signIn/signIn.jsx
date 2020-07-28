import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../App.css';
import InputForm from '../signUp/inputForm.jsx'
class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            account: "",
            password: "",
            users: []
        }
        this.inputChange = this.inputChange.bind(this);
    }
    componentDidMount(){
        fetch('https://rocky-citadel-32862.herokuapp.com/Forum/Users')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            });
            console.log(json);
        })  
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
    displayData() {
        var correctFlag = false;
        this.state.users.map(item => {
            if (this.state.account === item.user && this.state.password === item.password) {
                this.propertyChange("#account", "correct-ac", null);
                this.propertyChange("#incorrect-ac", "correct-ac", null);
                this.propertyChange("#visibleTooltip1", "hiddenTooltip1", null);
                this.propertyChange("#password", "correct-pass", null);
                this.propertyChange("#incorrect-pass", "correct-pass", null);
                correctFlag = true;
                this.props.setStateHandler("logedAs", this.state.account, "loginOrRegister", "Log out","login",false);
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
            return ReactDOM.createPortal(
                <div class="registration">
                    <div class="login-form">
                        
                        <form>
                        <div class="cancel-button-1">
                            <button onClick={() => this.props.setStateHandler("login", false)}>X</button>
                        </div>
                            <InputForm display="account name" id="account" type="text" value={this.state.account} inputChange={this.inputChange} tooltipId="hiddenTooltip1" tooltip="Please enter correct account name and password"/>
                            <InputForm display="password" id="password" type="password" value={this.state.password} inputChange={this.inputChange} tooltipId="" tooltip=""/>
                        </form>
                        <button onClick={() => this.displayData()}>Login</button>
                    </div>
                </div>
            ,document.getElementById('portal-root'));
        }

    }
}
export default SignIn;