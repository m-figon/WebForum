import React,{Component} from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import PostList from './postList/postList.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      section: "section",
      tmpSearch: "",
      search: "",
    };
    this.selectChange = this.selectChange.bind(this);
    this.searchBarChange = this.searchBarChange.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.resetState = this.resetState.bind(this);

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
  render(){
      return (
        <div className="App">
          <TopBar reset={this.resetState} searchSubmitHandler={this.searchButton} selectValue={this.state.section} searchValue={this.state.search} selectHandler={this.selectChange} searchHandler={this.searchBarChange}/>
          <Trending clickHandler={this.searchClick}/>
          <PostList selectValue={this.state.section} searchValue={this.state.tmpSearch} searchState={this.state.searchSubmit}/>
        </div>
      );
  }
  
}

export default App;

