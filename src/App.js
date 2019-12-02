import React from 'react';
import './assets/css/style.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import DetailPage from './components/DetailPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={DetailPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
