import React from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import testService from '../../Services/testservice/test.js'

function Register() {
    function handleFunc(ev) {
        ev.preventDefault()
        return testService.logout()
    }
    function handleFuncReg(ev) {
        ev.preventDefault()
        return testService.register()
    }
    function handleFuncLog(ev) {
        ev.preventDefault()
        return testService.login()
    }
    function handleFuncgetuser(ev) {
        ev.preventDefault()
        return testService.getuser()
    }
    function handleFuncedituser(ev) {
        ev.preventDefault()
        return testService.edituser()
    }

    return (
        <FormWrapper>
            <h3>Направете регистрация</h3>
            <form id="sign-form">
                <div>
                    <label htmlFor="name">Име</label>
                    <input type="text" id="name" spellCheck="false" placeholder="Bozhidar Atanasov" />
                </div>
                <div>
                    <label htmlFor="email">Е-мейл</label>
                    <input type="text" id="email" spellCheck="false" placeholder="boogy.hs@gmail.com" />
                </div>
                <div>
                    <label htmlFor="username">Потребителско име</label>
                    <input type="text" id="username" spellCheck="false" placeholder="Boogy" />
                </div>
                <div>
                    <label htmlFor="password">Парола</label>
                    <input type="password" id="password" placeholder="*****" />
                </div>
                <div>
                    <label htmlFor="repeat-password">Повторете паролата</label>
                    <input type="password" id="repeat-password" placeholder="*****" />
                </div>
                <div>
                    <label></label>
                    <button onClick={handleFuncedituser}>editUser</button>
                    <button onClick={handleFunc}>logout</button>
                    <button onClick={handleFuncgetuser}>getUser</button>
                    <FormButton value="Регистрация" id="register-button"></FormButton>
                    <button onClick={handleFuncReg}>Reg</button>
                    <button onClick={handleFuncLog}>login</button>
                </div>
            </form>
        </FormWrapper>
    )
}

export default Register;