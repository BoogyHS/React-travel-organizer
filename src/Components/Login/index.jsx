import React, { useState, useContext } from 'react'

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//services
import userService from '../../Services/user-service'

//contexts
import userContext from '../../Contexts/UserContext/index'

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, setUser] = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        }
        userService.login(data)
            .then(user => {
                setUser(user);
                console.log(user, 'login')
                props.history.push('/')
            })
    }

    return (
        <FormWrapper>
            <h3>Вход</h3>
            <form id="sign-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Потребителско име</label>
                    <input
                        type="text"
                        id="username"
                        spellCheck="false"
                        placeholder="Boogy"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Парола</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*****"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label></label>
                    <FormButton value="Вход" id="login-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default Login