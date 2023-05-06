import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=12;
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
        <NavBar />
          <Routes>
            <Route path='/' element={<News key='general' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
