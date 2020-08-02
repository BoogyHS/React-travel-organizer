import { useContext } from 'react';

//services
import userService from '../../Services/user-service';

//context
import userContext from '../../Contexts/UserContext'

function Logout(props) {
    const [, setUser] = useContext(userContext);

    userService.logout()
        .then(() => {
            setUser(undefined);
            props.history.push('/')
        })
    return null
}

export default Logout