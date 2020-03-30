import React, { Component } from 'react';
import TopBar from './topBar/topBar'
import Trending from './trending/trending'
import PostList from './postList/postList.jsx'

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TopBar/>
        <Trending/>
        <PostList/>
      </div>
    );
  }
  
}

export default App;
