// const baseUrl = 'https://rest-api-react-project.herokuapp.com/api/trips';
// const baseUrl = 'http://localhost:3300/api/trips';
import { baseUrl } from '../constants.js'

// baseUrl = baseUrl + '/trips'

const countryService = {

    // USED ONLY ONCE BY INIT THE COUNTRIESDATABASE 
    
    // addCountries: function (bodyData = {}, url = `${baseUrl}/countries/allCountries`) {

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
    getCountries: function (url = `${baseUrl}/countries/allCountries`) {
        return fetch(url)
            .then(res => res.json())
            .catch(err => console.log(err));
    }


};

export default countryService;