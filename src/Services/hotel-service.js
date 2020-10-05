//REFACTORING NEEDED

import { serverUrl } from '../constants.js'

const hotelService = {

    addHotel: function (bodyData, url = `${serverUrl}/trips/add-hotel`) {

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
    },
    del: function(id, url=''){
        console.log(id);
    },
    edit: function(id, url=''){
        console.log(id);
    }
};

export default hotelService;