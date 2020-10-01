import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen';


function App() {



  
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header id="header">     
        </header>
        <main className="main">
        <div className="content">
        <Route path="/" exact={true} component={HomeScreen}/>
        </div>
        </main>

    </div>
    </BrowserRouter>
  );
}
export default App;
