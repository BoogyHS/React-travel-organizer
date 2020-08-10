import { baseUrl } from '../constants.js'

const hotelService = {

    addHotel: function (bodyData, url = `${baseUrl}/add-hotel`) {

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
            .catch(err => console.log(err, 'addhotel-service'));
    }
};

export default hotelService;