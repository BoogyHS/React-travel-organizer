import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css'

import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../Home'
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import NewTrip from '../NewTrip';
import HotelForm from '../Hotel';
import FlightForm from '../Flight';
import CardsWrapper from '../CardsWrapper';


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
              <Route path="/home" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/new-trip" component={NewTrip} />
              <Route path="/statistics" component={Home} />
              <Route path="/hotel-form" component={HotelForm} />
              <Route path="/flight-form" component={FlightForm} />
              <Route path="/my-trips" component={CardsWrapper} />
            </Switch>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    // </userContext.Provider>
  );
}

export default App;