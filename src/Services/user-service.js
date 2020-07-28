// import statusHandler from '../utils/response-status-handler';

const baseUrl = 'https://rest-api-react-project.herokuapp.com/api/users';
// const baseUrl = 'http://localhost:3300/api/users';

const userService = {
    
    register: function (bodyData, url=`${baseUrl}/register`){

        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        }
        return fetch (url, data)
        // .then(statusHandler)
        .then(res=>res.json())
        .catch(err=>console.error(err));
    },
    login: function(bodyData, url=`${baseUrl}/login`){
        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(bodyData),
        }
        return fetch (url, data)
        // .then(statusHandler)
        .then(res=>res.json())
        .catch(err=>console.error(err, 'here'));
    },
    logout: function (url=`${baseUrl}/logout`) {
        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }
        return fetch(url, data)
        // .then(statusHandler)
        .then(res => res.json())
        .catch(err=>console.error(err));
    },
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

// testService.load('http://localhost:4200/api/users/register')

export default userService;