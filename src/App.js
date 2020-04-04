import React,{Component} from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import PostList from './postList/postList.jsx';
import SignIn from './signIn/signIn.jsx';
import SignUp from './signUp/signUp.jsx';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      section: "section",
      tmpSearch: "",
      search: "",
      login: false,
      logedAs: "",
      loginOrRegister: "Log in",
      register: false,
      className: "App",
      jsonArrayPosts: [],
      jsonArrayForm: []
    };
    this.selectChange = this.selectChange.bind(this);
    this.searchBarChange = this.searchBarChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.sectionClick = this.sectionClick.bind(this);
    this.loginRegisterStateChange = this.loginRegisterStateChange.bind(this);
    this.loginChange = this.loginChange.bind(this);
    this.logout = this.logout.bind(this);

  }
  componentDidMount(){
    console.log("App.js mount");
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(json =>{ 
            this.setState({
                jsonArrayPosts: json
            });
        })
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(json =>{ 
          this.setState({
              jsonArrayForm: json
          });
      })
  }
  selectChange(e){
    this.setState({
      section: e.target.value
    })
    console.log(this.state.section);
  }
  searchBarChange(e){
    this.setState({
        search: e.target.value
    })
  }
  sectionClick(value){
    this.setState({
      section: value
  })
  }
  searchClick(value){
    this.setState({
      section: "none",
      tmpSearch: value
  })
  }
  searchButton(){
    if(this.state.search !='' && this.state.search !=null){
      this.setState({
        section: "none",
        tmpSearch: this.state.search
    })
    }
  }
  resetState(){
    this.setState({
      section: "section",
      tmpSearch: "",
      search: ""
  })
  }
  loginRegisterStateChange(type,value){
      this.setState({
        [type]: value
      })
  }
  logout(){
    this.setState({
      logedAs: "",
      loginOrRegister: "Log in"
    })
  }
    loginChange(value,operation){
      this.setState({
        logedAs: value,
        loginOrRegister: operation
      })
    }
  render(){
    const props1 = {operation: this.state.loginOrRegister, logedAc: this.state.logedAs, logoutHandler: this.logout, loginHandler: this.loginRegisterStateChange,
    reset: this.resetState, searchSubmitHandler: this.searchButton, selectValue: this.state.section, searchValue: this.state.search, selectHandler: this.selectChange,
     searchHandler: this.searchBarChange};

    const props2 = { logedName: this.state.logedAs, postListjson: this.state.jsonArrayPosts, clickOnSign: this.searchClick, clickHandler: this.sectionClick, selectValue: this.state.section,
      searchValue: this.state.tmpSearch, searchState: this.state.searchSubmit}  

    if(this.state.login===false && this.state.register===false && this.state.section!="none"){
        return (
          <div className="App">
            <TopBar {...props1} />
            <Trending trendingClickHandler={this.searchClick}/>
            <PostList {...props2} />
          </div>
        );
      }
        else if(this.state.login===true){
          return (
            <>
            <div className="dark-App">
              <TopBar {...props1} />
              <Trending trendingClickHandler={this.searchClick}/>
              <PostList {...props2} />
            </div>
            <SignIn loginHandler2={this.loginChange} json={this.state.jsonArrayForm} loginHandler={this.loginRegisterStateChange} login={this.state.login}/>
            </>
          );
      }
      else if(this.state.register===true){
        return (
          <>
          <div className="dark-App">
            <TopBar {...props1} />
            <Trending trendingClickHandler={this.searchClick}/>
            <PostList {...props2} />
          </div>
          <SignUp json={this.state.jsonArrayForm} loginHandler={this.loginRegisterStateChange} register={this.state.register}/>
          </>
        );
    }
    if(this.state.section=="none"){
      return (
        <div className="App">
          <TopBar {...props1} />
          <PostList {...props2} />
        </div>
      );
    }
  }
}
export default App;

