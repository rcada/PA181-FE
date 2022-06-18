import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import LeaveReview from './pages/leaveReview';
import Statistics from './pages/statistics';
import Schedule from './pages/schedule';
import Registration from './pages/login';
import Reviews from './pages/reviews';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/" exact element={<Home/>} />
          <Route path="/registration" exact element={<Registration/>}/>
          <Route path="/leave-review" exact element={<LeaveReview/>} />
          <Route path="/reviews" exact element={<Reviews/>} />
          <Route path="/schedule" exact element={<Schedule/>} />
          <Route path="/statistics" exact element={<Statistics/>} />
        </Switch>
      
    </Router>
  );
}

export default App;
