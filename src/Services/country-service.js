//REFACTORING NEEDED - Role to be added, for admin only to upload countries

import { serverUrl } from '../constants.js'

const countryService = {

    // USED ONLY ONCE BY INIT THE COUNTRIESDATABASE 
    
    // addCountries: function (bodyData = {}, url = `${serverUrl}/countries/allCountries`) {

    //     const data = {
    //         method: 'post',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify(bodyData),
    //     };
    //     return fetch(url, data)
    //         .then(res => res.json())
    //         .catch(err => console.log(err, 'test-service'));
    // },
    getCountries: function (url = `${serverUrl}/countries/allCountries`) {
        return fetch(url)
            .then(res => res.json())
            .catch(err => console.log(err));
    }
};

export default countryService;