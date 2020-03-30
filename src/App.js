import React from 'react';
import TopBar from './topBar/topBar'
import Trending from './trending/trending'
import List from './postList/list'
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Trending/>
      <List/>
    </div>
  );
}

export default App;

