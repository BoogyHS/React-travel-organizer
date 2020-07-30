import React from 'react';

const userDetails = {
    isLogged: false,
    user: undefined,
    changeDetails: function (user) {
        if (user) {
            this.isLogged = true;
            this.user = user;
        } else {
            this.isLogged = false;
            this.user = undefined;
        }
    }
};

const userContext = React.createContext({ userDetails });

export default userContext