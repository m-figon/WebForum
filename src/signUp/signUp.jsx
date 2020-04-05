import React,{Component} from 'react';
import ReactDOM from "react-dom";
import '../signIn/signIn.css';
class SignUp extends Component{
    constructor(){
        super();
        this.state={
            account: "",
            password: "",
            password2: "",
            email: "",
            passwordType: "password"
        }
        this.inputChange=this.inputChange.bind(this);
        this.passwordTypeChange=this.passwordTypeChange.bind(this);
        this.displayData=this.displayData.bind(this);
        this.propertyChange=this.propertyChange.bind(this);
        this.validateInput=this.validateInput.bind(this);
    }
    inputChange(type,e){
        this.setState({
            [type]: e.target.value
        })
    }
    passwordTypeChange(){
        if(this.state.passwordType==="password"){
            this.setState({
                passwordType: "text"
            })
        }else if(this.state.passwordType==="text"){
            this.setState({
                passwordType: "password"
            })
        }
    }
    propertyChange(id,idValue,classValue){
        try{
            const node = ReactDOM.findDOMNode(this);
            const child = node.querySelector(id);
            if(!idValue){
                child.className=classValue;
            }
            if(!classValue){
                child.id=idValue;
            }
          }catch(e){
            console.log(e);
          }
    }
    validateInput(condition,variable,correct,incorrect,visible,hidden){
        if(condition){
            this.propertyChange('#'+variable,incorrect,null);
            this.propertyChange('#'+correct,incorrect,null);
            this.propertyChange('#'+hidden,visible,null);
        }else{
            this.propertyChange('#'+variable,correct,null);
            this.propertyChange('#'+incorrect,correct,null);
            this.propertyChange('#'+visible,hidden,null);
        }
    }
    displayData(){
        this.validateInput(this.state.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/)==null,"account","correct-ac","incorrect-ac","visibleTooltip1","hiddenTooltip1");
        this.validateInput(this.state.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/)==null,"email","correct-email","incorrect-email","visibleTooltip2","hiddenTooltip2");
        this.validateInput(this.state.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/)==null,"password","correct-pass","incorrect-pass","visibleTooltip3","hiddenTooltip3");
        this.validateInput((this.state.password2!=this.state.password) || (this.state.password2==""),"password2","correct-pass2","incorrect-pass2","visibleTooltip4","hiddenTooltip4");
    }
    render(){
        if(this.props.register==false){
            return(null);
        }else{
            return(
                <div class="registration">
                <div id="register" class="app-form">
                    <div class="cancel-button">
                        <button  onClick={()=>this.props.setStateHandler("register",false)}>X</button>
                    </div>
                <form id="form">
                <div class="one-line">
                    <div class="left">
                    <h1>account name</h1>
                    </div>
                    <div class="right">
                    <input id="account" type="text" onChange={(e)=>this.inputChange("account",e)} value={this.state.account}/>
                    <div id="hiddenTooltip1">Please enter correct account name</div>
                    </div>
                  </div>
                  <div class="one-line">
                    <div class="left">
                    <h1>e-mail adress</h1>
                    </div>
                    <div class="right">
                    <input id="email" type="text" onChange={(e)=>this.inputChange("email",e)} value={this.state.email}/>
                    <div id="hiddenTooltip2">Please enter correct email adress</div>
                    </div>
                  </div>
                  <div class="one-line">
                    <div class="left">
                    <h1>password</h1>
                    </div>
                    <div class="right">
                    <input id="password" onChange={(e)=>this.inputChange("password",e)} type={this.state.passwordType} value={this.state.password}/>
                    <div id="hiddenTooltip3">Please enter correct password</div>
                    </div>
                  </div>
                  <button type="button" id="show" onClick={this.passwordTypeChange}>SHOW</button>
                  <div class="one-line">
                    <div class="left">
                    <h1>confirm password</h1>
                    </div>
                    <div class="right">
                    <input id="password2" onChange={(e)=>this.inputChange("password2",e)} type={this.state.passwordType} value={this.state.password2}/>
                    <div id="hiddenTooltip4">Please confirm your password</div>
                    </div>
                  </div>
                  </form>
                  
                <button onClick={this.displayData}>Login</button>
                </div>
                </div>
            );
        }
        
    }
}
export default SignUp;