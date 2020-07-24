import React from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//services
import userService from '../../Services/user-service'

function Register(props) {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        userService.register(data)
        .then(x=>{
            console.log(x)
            props.history.push('/')
        })
        // console.log(data);
    };

    function handleFunc(ev) {
        ev.preventDefault()
        return userService.logout()
    }
    function handleFuncReg(ev) {
        ev.preventDefault()
        return userService.register()
    }
    function handleFuncLog(ev) {
        ev.preventDefault()
        return userService.login()
    }
    function handleFuncgetuser(ev) {
        ev.preventDefault()
        return userService.getuser()
    }
    function handleFuncedituser(ev) {
        ev.preventDefault()
        return userService.edituser()
    }

    return (
        <FormWrapper>
            <h3>Направете регистрация</h3>
            <form id="sign-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Име</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        spellCheck="false"
                        placeholder="Bozhidar Atanasov"
                        ref={register}
                    />
                </div>
                <div>
                    <label htmlFor="email">Е-мейл</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        spellCheck="false"
                        placeholder="boogy.hs@gmail.com"
                        ref={register({ required: true })}
                    />
                    {errors.email && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="username">Потребителско име</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        spellCheck="false"
                        placeholder="Boogy"
                        ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.username
                        && errors.username.type === "required"
                        && <p>This field is required</p>}
                    {errors.username
                        && errors.username.type === "minLength"
                        && <p>Username must be at least 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="password">Парола</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*****"
                        ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.password
                        && errors.password.type === "required"
                        && <p>This field is required</p>}
                    {errors.password
                        && errors.password.type === "minLength"
                        && <p>Password must be at least 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="repeat-password">Повторете паролата</label>
                    <input
                        type="password"
                        id="repeat-password"
                        name="repeat-password"
                        placeholder="*****"
                        ref={register({
                            validate: (value) => {
                                return value === watch('password');
                            }
                        })}
                    />
                    {errors['repeat-password'] && <p>Password doesn't match</p>}
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