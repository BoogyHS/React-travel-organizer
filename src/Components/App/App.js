import React from 'react';
import Header from '../Header/index'
import Home from '../Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact><Redirect to="/home" /></Route>
        <Route path="/home" render={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
