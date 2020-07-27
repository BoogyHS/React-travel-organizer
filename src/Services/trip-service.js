// const baseUrl = 'https://arcane-retreat-44164.herokuapp.com/api/trips';
const baseUrl = 'http://localhost:3300/api/trips';

const tripService = {

    newTrip: function (bodyData, url = `${baseUrl}/new-trip`) {
        console.log(bodyData)
        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        }
        return fetch(url, data)
            // .then(statusHandler)
            .then(res => res.json())
            .catch(err => console.error(err, 'here'));
    },
};

export default tripService;