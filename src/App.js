import React, { Component } from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import PostList from './postList/postList.jsx';
import SignIn from './signIn/signIn.jsx';
import SignUp from './signUp/signUp.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      section: "section",
      tmpSearch: "",
      comment: "",
      id: 0,
      search: "",
      login: false,
      logedAs: "",
      loginOrRegister: "Log in",
      register: false,
      jsonArrayPosts: [],
      jsonArrayForm: []
    };
    this.selectOrInputChange = this.selectOrInputChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.setStateChange = this.setStateChange.bind(this);
    
  }
  jsonFetch(http,array){
    fetch(http)
    .then(response => response.json())
    .then(json => {
      this.setState({
        [array]: json
      });
    })
  }
  componentDidMount() {
    
    console.log("App.js mount");
    this.jsonFetch('http://localhost:3000/posts','jsonArrayPosts');
    this.jsonFetch('http://localhost:3000/users','jsonArrayForm');
  }
  selectOrInputChange(value, e) {
    this.setState({
      [value]: e.target.value
    })
  }
  setStateChange(type1, value1, type2, value2, type3, value3) {
    this.setState({
      [type1]: value1,
      [type2]: value2,
      [type3]: value3,

    })
  }
  searchButton() {
    if (this.state.search !== '') {
      this.setState({
        section: "none",
        tmpSearch: this.state.search
      })
    }
  }

  render() {
    const props1 = {
      operation: this.state.loginOrRegister, logedAc: this.state.logedAs, setStateHandler: this.setStateChange,
      searchSubmitHandler: this.searchButton, selectValue: this.state.section, searchValue: this.state.search, selectOrInputHandler: this.selectOrInputChange
    };

    const props2 = {
      setStateHandler: this.setStateChange, logedName: this.state.logedAs, postListjson: this.state.jsonArrayPosts, selectValue: this.state.section,
      searchValue: this.state.tmpSearch, searchState: this.state.searchSubmit
    }
    const MySubComponent = () => {
      return (
        <>
          <TopBar {...props1} />
          <Trending json={this.state.jsonArrayPosts} setStateHandler={this.setStateChange} />
          <PostList {...props2} />
        </>
      );
    }
    if (!this.state.login && !this.state.register && this.state.section !== "none") {
      return (
        <div className="App">
          <MySubComponent />
        </div>
      );
    }
    else if (this.state.login && this.state.section !== "none") {
      return (
        <>
          <div className="dark-App">
            <MySubComponent />
          </div>
          <SignIn json={this.state.jsonArrayForm} setStateHandler={this.setStateChange} login={this.state.login} />
        </>
      );
    }
    else if (this.state.login && this.state.section === "none") {
      return (
        <>
          <div className="dark-App">
          <TopBar {...props1} />
          <PostList {...props2} />
          </div>
          <SignIn json={this.state.jsonArrayForm} setStateHandler={this.setStateChange} login={this.state.login} />
        </>
      );
    }
    else if (this.state.register && this.state.section !== "none") {
      return (
        <>
          <div className="dark-App">
            <MySubComponent />
          </div>
          <SignUp json={this.state.jsonArrayForm} setStateHandler={this.setStateChange} register={this.state.register} />
        </>
      );
    }else if (this.state.register && this.state.section === "none") {
      return (
        <>
          <div className="dark-App">
          <TopBar {...props1} />
          <PostList {...props2} />
          </div>
          <SignUp json={this.state.jsonArrayForm} setStateHandler={this.setStateChange} register={this.state.register} />
        </>
      );
    }
    if (this.state.section === "none" && !this.state.register && !this.state.login) {
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

