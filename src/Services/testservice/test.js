const testService = {
    load: function (url='http://localhost:4200/api/users/register') {
        return fetch(url)
            .then(res => res.json())
            .then(console.log);
    }
};

// testService.load('http://localhost:4200/api/users/register')

export default testService;