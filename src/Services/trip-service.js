// const baseUrl = 'https://rest-api-react-project.herokuapp.com/api/trips';
const baseUrl = 'http://localhost:3300/api/trips';

const tripService = {

    newTrip: function (bodyData, url = `${baseUrl}/new-trip`) {
        // console.log(bodyData)
        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        }
        return fetch(url, data)
            .then(res => res.json())
            .catch(err => console.log(err, 'new-trip-service'));
    },
    getTrips: function (userId){
        const url =  `${baseUrl}/my-trips?userId=${userId}`
        const data = {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
        }
        return fetch(url, data)
            .then(res => res.json())
            .catch(err => console.log(err, 'gettrips-service'));
    }
};

export default tripService;