import React from 'react';
import TopBar from './topBar/topBar.jsx';
import Trending from './trending/trending.jsx';
import List from './postList/postList.jsx';
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

