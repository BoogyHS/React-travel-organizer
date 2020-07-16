import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css'

import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../Home'
import Register from '../Register';
import Login from '../Login';
import NewTravel from '../NewTravel';
import HotelForm from '../Hotel';
import FlightForm from '../Flight';


function App() {
  // const userContext = React.createContext({ loggedIn: false });

  return (
    // <userContext.Provider value={{ loggedIn: false }}>
      <BrowserRouter>
        <Header />
        <div className={styles["wrapper"]}>
          <main>
            <Switch>
              <Route path="/" exact><Redirect to="/home" /></Route>
              <Route path="/home" render={Home} />
              <Route path="/register" render={Register} />
              <Route path="/login" render={Login} />
              <Route path="/new-travel" render={NewTravel} />
              <Route path="/statistics" render={Home} />
              <Route path="/hotel-form" render={HotelForm} />
              <Route path="/flight-form" render={FlightForm} />
              <Route path="/my-travels" render={Home} />
            </Switch>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    // </userContext.Provider>
  );
}

export default App;