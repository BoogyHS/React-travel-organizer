// import React from 'react';

import userService from '../../Services/user-service';

function Logout(props) {
    console.log('logout')
    userService.logout()
        .then(() => props.history.push('/'))
    return null
}

export default Logout