import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import KeepApp from './components/KeepApplication';

class App extends Component {
  render() {
    return (
      <div>
      <KeepApp />      
      </div>
    );
  }
}

export default App;
