import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Redirect to={'/home'} />
      </Switch>
    </div>
  );
}

export default App;
