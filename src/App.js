import React from 'react';
import './App.css';
import Navbar from './Navigation/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppOne from './Applications/App 1/appOne';
import AppTwo from './Applications/App 2/appTwo'
import AppThree from './Applications/App 3/appThree';
import AppFour from './Applications/App 4/appFour';
import AppFive from './Applications/App 5/appFive';
import AppSix from './Applications/App 6/appSix';
import AppSeven from './Applications/App 7/appSeven';
import AppEight from './Applications/App 8/appEight';
const Home = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  )
}

 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/clickCounter' component={AppOne} />
          <Route path='/clock' component={AppTwo} />
          <Route path='/timer' component={AppThree} />
          <Route path='/advancedTimer' component={AppFour} />
          <Route path='/moviecards' component={AppFive} />
          <Route path='/masterminds' component={AppSix} />
          <Route path='/calculator' component={AppSeven} />
          <Route path='/weather' component={AppEight} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
