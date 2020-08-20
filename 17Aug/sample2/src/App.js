import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Dashboard from './Dashboard';

function App() {
  return ( //  Route is a library
    <div className="App">

      <BrowserRouter>

        <Link to="/home"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/dashboard"> Dashboard </Link>

        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/dashboard" component={Dashboard} />

      </BrowserRouter>
    </div >
  );
}
export default App;
