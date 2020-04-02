import React,{Component} from 'react';
import ReactDOM from "react-dom";
import '../signIn/signIn.css';
class SignUp extends Component{
    constructor(){
        super();
        this.state={
            account: "",
            password: "",
            passwordType: "password",
            jsonArray: []
        }
        this.inputChange=this.inputChange.bind(this);
        this.passwordTypeChange=this.passwordTypeChange.bind(this);
        this.displayData=this.displayData.bind(this);
        this.propertyChange=this.propertyChange.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(json =>{ 
            this.setState({
                jsonArray: json
            });
        })
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
    displayData(){
        var correctFlag=false;
        this.state.jsonArray.map(item=>{
            if(this.state.account==item.user && this.state.password==item.password){
                this.propertyChange("#account","correct-ac",null);
                this.propertyChange("#incorrect-ac","correct-ac",null);
                this.propertyChange("#visibleTooltip1","hiddenTooltip1",null);
                this.propertyChange("#password","correct-pass",null);
                this.propertyChange("#incorrect-pass","correct-pass",null);
                correctFlag=true;
            }
        }) 
        if(correctFlag==false){
            this.propertyChange("#hiddenTooltip1","visibleTooltip1",null);
            this.propertyChange("#correct-ac","incorrect-ac",null);
            this.propertyChange("#account","incorrect-ac",null);
            this.propertyChange("#correct-pass","incorrect-pass",null);
            this.propertyChange("#password","incorrect-pass",null);
        }
    }
    render(){
        if(this.props.register==false){
            return(null);
        }else{
            return(
                <div class="registration">
                <div id="login" class="app-form">
                    <div class="cancel-button">
                        <button  onClick={()=>this.props.loginHandler("register",false)}>X</button>
                    </div>
                <form id="form">
                <div class="one-line">
                    <div class="left">
                    <h1>account name</h1>
                    </div>
                    <div class="right">
                    <input id="account" type="text" onChange={(e)=>this.inputChange("account",e)} value={this.state.account}/>
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
export default SignUp;