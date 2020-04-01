import React,{Component} from 'react';
import './signIn.css';
class SignIn extends Component{
    constructor(){
        super();

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
                    <input id="ac-name" type="text" />
                    <div id="hiddenTooltip1">Please enter correct account name and password</div>
                    </div>
                  </div>
                  <div class="one-line">
                    <div class="left">
                    <h1>password</h1>
                    </div>
                    <div class="right">
                    <input id="password" />
                    </div>
                  </div>
                  <button type="button" id="show">SHOW</button>
    
                  </form>
                  
                <button onClick={this.displayData}>Login</button>
                </div>
                </div>
            );
        }
        
    }
}
export default SignIn;