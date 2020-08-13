import { useContext } from 'react';

//services
import userService from '../../Services/user-service';

//context
import userContext from '../../Contexts/UserContext';
import notificationContext from '../../Contexts/NotificationsContext';

function Logout(props) {
    const [, setUser] = useContext(userContext);
    const [, setNotification] = useContext(notificationContext);

    userService.logout()
        .then(() => {
            setUser(undefined);
            setNotification({ success: "Logout Successful" });
            setTimeout(() => {
                setNotification(null);
            }, 3000);
            props.history.push('/')
        })
        .catch(err => {
            setNotification({ error: err.message || "Something went wrong" });
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        })
    return null
}

export default Logout