import React,{Component} from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import PostList from './postList/postList.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      section: "section"
    };
    this.selectChange = this.selectChange.bind(this);
  }
  selectChange(e){
    this.setState({
      section: e.target.value
    })
  }
  render(){
      return (
        <div className="App">
          <TopBar selectValue={this.state.section} selectHandler={this.selectChange}/>
          <Trending/>
          <PostList selectValue={this.state.section}/>
        </div>
      );
  }
  
}

export default App;

