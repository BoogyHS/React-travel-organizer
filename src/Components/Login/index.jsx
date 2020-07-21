import React, {useState} from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value)
        console.log(e.target.password.value)
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
                    onChange={e=>setPassword(e.target.value)}/>
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