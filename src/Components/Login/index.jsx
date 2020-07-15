import React from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

function Login(){
    return (
        <FormWrapper>
        <h3>Вход</h3>
                <form id="sign-form">
                    <div>
                        <label htmlFor="username">Потребителско име</label>
                        <input type="text" id="username" spellCheck="false" placeholder="Boogy" />
                    </div>
                    <div>
                        <label htmlFor="password">Парола</label>
                        <input type="password" id="password" placeholder="*****"/>
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