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
// import TestComponent from '../testComponent'

//context
import userContext from '../../Contexts/UserContext'
import notificationsContext from '../../Contexts/NotificationsContext'

//services
import userService from '../../Services/user-service';
import TripDetails from '../TripDetails';
import NotFound from '../common/NotFound';
import Profile from '../Profile';

function App() {
  const [user, setUser] = useState(undefined);
  const [notification, setNotification] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const notification = { error: "something went wrong", success: "sucessfull" }
  // const notification = null

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
        <notificationsContext.Provider value={[notification, setNotification]}>
          <div>
            {notification && notification.error && <p className={`${styles.error} ${styles.notification}`} >{notification.error}</p>}
            {notification && notification.success && <p className={`${styles.success} ${styles.notification}`}>{notification.success}</p>}
          </div>
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
                  {user && <Route path="/profile" component={Profile} />}
                  {user && <Route path="/new-trip" component={NewTrip} />}
                  {/*<Route path="/statistics" component={TestComponent} />*/}
                  {user &&<Route path="/add-hotel" component={HotelForm} />}
                  {user && <Route path="/add-flight" component={FlightForm} />}
                  {user && <Route path="/my-trips" exact component={TripsWrapper} />}
                  {user && <Route path="/my-trips/:id/reservations" component={ReservationsWrapper} />}
                  {user && <Route path="/my-trips/:id" component={TripDetails} />}
                  <Route path="*" component={NotFound} />
                </Switch>
              </main>
            </div>
            <Footer />
          </BrowserRouter>
        </notificationsContext.Provider>
      </userContext.Provider>
    );
  }
}

export default App;