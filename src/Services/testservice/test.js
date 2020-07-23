const testService = {
    logout: function (url='http://localhost:3300/api/users/logout') {
        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json'
            }
        }
        return fetch(url, data)
            // .then(res => res.json())
            .then(console.log);
    },
    register: function (url='https://arcane-retreat-44164.herokuapp.com/api/users/register'){
        const bodyData = {
            name: 'SomeName',
            email: 'some@email.com',
            username: 'someUsername',
            password: '12345',
            rePassword: '12345'
        }
        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json',
                credentials: 'include'
            },
            body: JSON.stringify(bodyData),
        }
        return fetch (url, data)
        .then(res=>res.json())
        .then(console.log)
    },
    login: function(bodyData, url='http://localhost:3300/api/users/login'){
       
        const data = {
            method: 'post',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bodyData),
        }
        return fetch (url, data)
        .then(res=>res.json())
        .then(console.log)
        .catch(err=>console.error(err))
    },
    getuser: function(url='http://localhost:3300/api/users/user/someUsername'){
       
        const data = {
            method: 'get',
            headers:{
                'Content-type': 'application/json'
            }
        }
        return fetch (url, data)
        .then(res=>res.json())
        .then(console.log)
        .catch(err=>console.error(err))
    },
    edituser: function(url='http://localhost:3300/api/users/edit/someUsername'){
        const bodyData = {
            username: 'someUsername',
            password: '12345',
        }
        const data = {
            method: 'put',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bodyData),
        }
        return fetch (url, data)
        .then(res=>res.json())
        .then(console.log)
        .catch(err=>console.error(err))
    },
    
};

// testService.load('http://localhost:4200/api/users/register')

export default testService;