import { baseUrl } from '../constants.js'

const flightService = {

    addFlight: function (bodyData, url = `${baseUrl}/trips/add-flight`) {

        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        };
        return fetch(url, data)
            .then(res => res.json())
            .catch(err => console.log(err, 'addFlight-service'));
    }
};

export default flightService;