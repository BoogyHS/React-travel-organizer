import React from 'react';

//service
// import userService from '../../Services/user-service'

// userService.confirmUser()
//     .then(res => console.log(res, 'usercontext'));
    
const userDetails = {
    user: undefined
};

const userContext = React.createContext({ userDetails });

export default userContext