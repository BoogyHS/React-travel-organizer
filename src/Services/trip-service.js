//REFACTORING NEEDED

import { serverUrl } from '../constants.js'

const tripService = {

    newTrip: function (bodyData, url = `${serverUrl}/trips/new-trip`) {

        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        };
        return fetch(url, data)
        // .then(res => res.json())
        // .catch(err => console.log(err, 'new-trip-service'));
    },
    getTrips: function (userId) {
        const url = `${serverUrl}/trips/my-trips?userId=${userId}`;
        const data = {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
        };
        return fetch(url, data)
            .then(res => res.json())
            .catch(err => console.log(err, 'gettrips-service'));
    },
    getReservations: function (userId, tripId) {
        const url = `${serverUrl}/trips/my-trips/${tripId}/reservations?userId=${userId}&tripId=${tripId}`;
        const data = {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
        };
        return fetch(url, data)
            .then(res => res.json())
            .catch(err => console.log(err, 'getreservations-service'));
    }
};

export default tripService;