import { useContext } from 'react';

//services
import userService from '../../Services/user-service';

//context
import userContext from '../../Contexts/UserContext'

function Logout(props) {
    const [user, setUser] = useContext(userContext);

    userService.logout()
        .then(() => {
            setUser({ user: undefined });
            props.history.push('/')
        })
    return null
}

export default Logout