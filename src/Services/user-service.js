//REFACTORING NEEDED

import { serverUrl } from '../constants'

const userService = {

    register: function (bodyData, url = `${serverUrl}/users/register`) {

        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        }
        return fetch(url, data)
            // .then(statusHandler)
            .then(res => res.json())
        // .catch(err => console.error(err));
    },
    login: function (bodyData, url = `${serverUrl}/users/login`) {
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
        // .catch(err => console.error(err, 'here'));
    },
    logout: function (url = `${serverUrl}/users/logout`) {
        const data = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }
        return fetch(url, data)
            // .then(statusHandler)
            .then(res => res.json())
            .catch(err => console.log(err));
    },
    confirmUser: function (url = `${serverUrl}/users/confirm-user`) {
        const data = {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }
        return fetch(url, data)
        // .then(res => res.json())
        // .catch(err => console.log(err));
    }
    // getuser: function(url='http://localhost:3300/api/users/user/someUsername'){

    //     const data = {
    //         method: 'get',
    //         headers:{
    //             'Content-type': 'application/json'
    //         }
    //     }
    //     return fetch (url, data)
    //     .then(res=>res.json())
    //     .then(console.log)
    //     .catch(err=>console.error(err))
    // },
    // edituser: function(url='http://localhost:3300/api/users/edit/someUsername'){
    //     const bodyData = {
    //         username: 'someUsername',
    //         password: '12345',
    //     }
    //     const data = {
    //         method: 'put',
    //         headers:{
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(bodyData),
    //     }
    //     return fetch (url, data)
    //     .then(res=>res.json())
    //     .then(console.log)
    //     .catch(err=>console.error(err))
    // },
    // register: function ( url='http://localhost:9999/api/user/register'){
    //     const bodyData = {
    //         username: 'someUsername',
    //         password: '12345',
    //     }
    //     const data = {
    //         method: 'post',
    //         headers:{
    //             'Content-type': 'application/json',
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify(bodyData),
    //     }
    //     return fetch (url, data)
    //     .then(res=>res.json())
    //     .then(console.log)
    // },

};

export default userService;