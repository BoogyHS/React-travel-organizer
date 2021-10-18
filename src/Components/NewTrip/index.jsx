//REFACTORING NEEDED

import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//context
import UserContext from '../../Contexts/UserContext'
import notificationContext from '../../Contexts/NotificationsContext'

//services
import tripService from '../../Services/trip-service'

function NewTrip(props) {

    const [user,] = useContext(UserContext);
    const [, setNotification] = useContext(notificationContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data = { userId: user._id, ...data }
        tripService.newTrip(data)
            .then(res => {
                if (res.status === 400) {
                    return res.json();
                } else {
                    setNotification({ success: "New trip created successful" });
                    setTimeout(() => {
                        setNotification(null);
                    }, 3000);
                    props.history.push('/');
                }
            })
            .then(res => {
                setNotification({ error: res.message || "Something went wrong" });
                setTimeout(() => {
                    setNotification(null);
                }, 3000);
            })
            .catch(console.log)
    };

    return (
        <FormWrapper>
            <h3>New trip</h3>
            <form id="new-trip-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        spellCheck="false"
                        placeholder="New Zealand 2018"
                        ref={register({ required: true })}
                    />
                    {errors.name && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="startDate">Start date</label>
                    <input
                        type="date"
                        id="start-date"
                        name="startDate"
                        ref={register({ required: true })}
                    />
                    {errors.startDate && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="endDate">End date</label>
                    <input
                        type="date"
                        id="end-date"
                        name="endDate"
                        ref={register({ required: true })}
                    />
                    {errors.endDate && <p>This field is required</p>}
                </div>
                <div>
                    <label></label>
                    <FormButton value="Create" id="new-trip-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default NewTrip