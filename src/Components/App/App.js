import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className={styles["wrapper"]}>
        <main>
          <Switch>
            <Route path="/" exact><Redirect to="/home" /></Route>
            <Route path="/home" render={Home} />
            <Route path="/register" render={Home} />
            <Route path="/login" render={Home} />
            <Route path="/new-travel" render={Home} />
            <Route path="/statistics" render={Home} />
            <Route path="/my-travels" render={Home} />
          </Switch>
        </main>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;