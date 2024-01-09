import './App.css';

// App.js
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


function App(){
  return (
    <div className="App"><Header />
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/experience" exact component={Experience} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;