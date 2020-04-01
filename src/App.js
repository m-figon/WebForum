import React,{Component} from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import PostList from './postList/postList.jsx';
import SignIn from './signIn/signIn.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      section: "section",
      tmpSearch: "",
      search: "",
      login: false,
      register: false,
      className: "App"
    };
    this.selectChange = this.selectChange.bind(this);
    this.searchBarChange = this.searchBarChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.sectionClick = this.sectionClick.bind(this);
    this.loginStateChange = this.loginStateChange.bind(this);

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
  loginStateChange(value){
    this.setState({
      login: value
    })
    console.log(this.state.login);
    }
  render(){
      if(this.state.login===false){
        return (
          <div className="App">
            <TopBar loginHandler={this.loginStateChange} reset={this.resetState} searchSubmitHandler={this.searchButton} selectValue={this.state.section} searchValue={this.state.search} selectHandler={this.selectChange} searchHandler={this.searchBarChange}/>
            <Trending clickHandler={this.searchClick}/>
            <PostList clickHandler={this.sectionClick} selectValue={this.state.section} searchValue={this.state.tmpSearch} searchState={this.state.searchSubmit}/>
          </div>
        );
      }
        else if(this.state.login===true){
          return (
            <>
            <div className="dark-App">
              <TopBar loginHandler={this.loginStateChange} reset={this.resetState} searchSubmitHandler={this.searchButton} selectValue={this.state.section} searchValue={this.state.search} selectHandler={this.selectChange} searchHandler={this.searchBarChange}/>
              <Trending clickHandler={this.searchClick}/>
              <PostList clickHandler={this.sectionClick} selectValue={this.state.section} searchValue={this.state.tmpSearch} searchState={this.state.searchSubmit}/>
            </div>
            <SignIn loginHandler={this.loginStateChange} login={this.state.login}/>
            </>
          );
      }
      
  }
}
export default App;

