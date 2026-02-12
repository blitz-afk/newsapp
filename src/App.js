import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  
  render() {
    const apiKey = process.env.REACT_APP_NEWS_API;
    return (
      <div>
        <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}
        ></div>
        <Router>
        <Navbar/>
          <Routes>
              <Route path='/' element={<News pageSize={10} API={apiKey} category='general'/>}/>
              <Route path='/general' element={<News pageSize={10} API={apiKey} category='general'/>}/>
              <Route path='/business' element={<News pageSize={10} API={apiKey} category='business'/>}/>
              <Route path='/entertainment' element={<News pageSize={10} API={apiKey} category='entertainment'/>}/>
              <Route path='/health' element={<News pageSize={10} API={apiKey} category='health'/>}/>
              <Route path='/science' element={<News pageSize={10} API={apiKey} category='science'/>}/>
              <Route path='/sports' element={<News pageSize={10} API={apiKey} category='sports'/>}/>
              <Route path='/technology' element={<News pageSize={10} API={apiKey} category='technology'/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

