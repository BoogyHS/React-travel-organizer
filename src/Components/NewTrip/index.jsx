import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//context
import UserContext from '../../Contexts/UserContext'

//services
import tripService from '../../Services/trip-service'

function NewTrip(props) {

    const [user, ] = useContext(UserContext)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data = { userId: user._id, ...data }
        tripService.newTrip(data)
            .then(x => {
                console.log(x);
                props.history.push('/');
            })
    };

    return (
        <FormWrapper>
            <h3>Нова дестинация</h3>
            <form id="new-trip-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Име</label>
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
                    <label htmlFor="startDate">Дата на заминаване</label>
                    <input
                        type="date"
                        id="start-date"
                        name="startDate"
                        ref={register({ required: true })}
                    />
                    {errors.startDate && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="endDate">Дата на връщане</label>
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
                    <FormButton value="Създай" id="new-trip-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default NewTrip