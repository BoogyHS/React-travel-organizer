//REFACTORING NEEDED

import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

import styles from './style.module.css'

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//services
import userService from '../../Services/user-service'

//context 
import userContext from '../../Contexts/UserContext'
import notificationContext from '../../Contexts/NotificationsContext';

function Register(props) {
    const [, setUser] = useContext(userContext);
    const [, setNotification] = useContext(notificationContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        userService.register(data)
            .then(res => {
                if (res.username) {
                    setUser(res);
                    setNotification({ success: "Register Successful" });
                    setTimeout(() => {
                        setNotification(null);
                    }, 3000);
                    props.history.push('/');
                } else {
                    throw new Error(res.message);
                }
            })
            .catch(err => {
                setNotification({ error: err.message || "Something went wrong" });
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            })
    };

    return (
        <FormWrapper>
            <h3>Register</h3>
            <form id="sign-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        spellCheck="false"
                        placeholder="boogy.hs@gmail.com"
                        ref={register({ required: true })}
                    />
                    {errors.email && <p className={styles.err}>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="username">Username</label>
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
                        && <p className={styles.err}>This field is required</p>}
                    {errors.username
                        && errors.username.type === "minLength"
                        && <p className={styles.err}>Username must be at least 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*****"
                        ref={register({ required: true, minLength: 5 })}
                    />
                    {errors.password
                        && errors.password.type === "required"
                        && <p className={styles.err}>This field is required</p>}
                    {errors.password
                        && errors.password.type === "minLength"
                        && <p className={styles.err}>Password must be at least 5 characters</p>}
                </div>
                <div>
                    <label htmlFor="repeat-password">Repeat Password</label>
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
                    {errors['repeat-password'] && <p className={styles.err}>Password doesn't match</p>}
                </div>
                <div>
                    <label></label>
                    <FormButton value="Register" id="register-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default Register;