import React from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

function Register() {

    return (
        <FormWrapper>
            <h3>Направете регистрация</h3>
            <form id="sign-form">
                <div>
                    <label for="name">Име</label>
                    <input type="text" id="name" spellcheck="false" placeholder="Bozhidar Atanasov" />
                </div>
                <div>
                    <label for="email">Е-мейл</label>
                    <input type="text" id="email" spellcheck="false" placeholder="boogy.hs@gmail.com" />
                </div>
                <div>
                    <label for="username">Потребителско име</label>
                    <input type="text" id="username" spellcheck="false" placeholder="Boogy" />
                </div>
                <div>
                    <label for="password">Парола</label>
                    <input type="password" id="password" placeholder="*****" />
                </div>
                <div>
                    <label for="repeat-password">Повторете паролата</label>
                    <input type="password" id="repeat-password" placeholder="*****" />
                </div>
                <div>
                    <label></label>
                    <FormButton text="Регистрация" id="register"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default Register;