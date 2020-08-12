import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//styles
import styles from './App.module.css'

//components
import Header from '../common/Header'
import Footer from '../common/Footer'
import Loader from '../common/Loader'
import Home from '../Home'
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import NewTrip from '../NewTrip';
import HotelForm from '../Hotel';
import FlightForm from '../Flight';
import TripsWrapper from '../TripsWrapper';
import ReservationsWrapper from '../ReservationsWrapper';
import TestComponent from '../testComponent'

//context
import userContext from '../../Contexts/UserContext'

//services
import userService from '../../Services/user-service';
import TripDetails from '../TripDetails';
import NotFound from '../common/NotFound';

function App() {
  const [user, setUser] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    userService.confirmUser()
      .then(res => {
        if (res.status === 401) { throw new Error('Unauthorized'); }
        res.json()
          .then(user => {
            if (user.username) {
              setUser(user);
              setLoading(false);
            } else {
              throw new Error(user.text())
            }
          });
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {

    return <Loader className={styles.loader}></Loader>

  } else {

    return (
      <userContext.Provider value={[user, setUser]}>
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
                <Route path="/statistics" component={TestComponent} />
                <Route path="/add-hotel" component={HotelForm} />
                <Route path="/add-flight" component={FlightForm} />
                <Route path="/my-trips" exact component={TripsWrapper} />
                <Route path="/my-trips/:id/reservations" component={ReservationsWrapper} />
                <Route path="/my-trips/:id" component={TripDetails} />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
          </div>
          <Footer />
        </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default App;