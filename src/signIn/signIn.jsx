import React,{Component} from 'react';
import ReactDOM from "react-dom";
import './signIn.css';
class SignIn extends Component{
    constructor(){
        super();
        this.state={
            account: "",
            password: "",
            passwordType: "password"
        }
        this.inputChange=this.inputChange.bind(this);
        this.passwordTypeChange=this.passwordTypeChange.bind(this);
        this.displayData=this.displayData.bind(this);
        this.tooltipChange=this.tooltipChange.bind(this);
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
    tooltipChange(id,idValue,classValue){
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
    displayData(){
        if(this.state.account==="Gamer5"){
            console.log("correct");
        }
        else{
            console.log("not correct");
            this.tooltipChange("#hiddenTooltip1","visibleTooltip1",null);
        }
    }
    render(){
        if(this.props.login==false){
            return(null);
        }else{
            return(
                <div class="registration">
                <div id="login" class="app-form">
                    <div class="cancel-button">
                        <button  onClick={()=>this.props.loginHandler(false)}>X</button>
                    </div>
                <form id="form">
                <div class="one-line">
                    <div class="left">
                    <h1>account name</h1>
                    </div>
                    <div class="right">
                    <input id="ac-name" type="text"  onChange={(e)=>this.inputChange("account",e)} value={this.state.account}/>
                    <div id="hiddenTooltip1">Please enter correct account name and password</div>
                    </div>
                  </div>
                  <div class="one-line">
                    <div class="left">
                    <h1>password</h1>
                    </div>
                    <div class="right">
                    <input id="password" onChange={(e)=>this.inputChange("password",e)} type={this.state.passwordType} value={this.state.password}/>
                    </div>
                  </div>
                  <button type="button" id="show" onClick={this.passwordTypeChange}>SHOW</button>
    
                  </form>
                  
                <button onClick={this.displayData}>Login</button>
                </div>
                </div>
            );
        }
        
    }
}
export default SignIn;