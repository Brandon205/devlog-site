import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Post from './Post';
import logo from './assets/images/DevLog.png';
import './App.css';

export default function App() {
  return (
    <Router>
      <header className="header">
        <Link to="/" className="header-link">Home</Link>
        <img src={logo} alt="logo" />
        <Link to="/about" className="header-link">About</Link>
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/post" component={Post} />
    </Router>
  )
}
