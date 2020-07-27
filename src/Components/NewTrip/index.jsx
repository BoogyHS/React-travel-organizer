import React from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

//services
import tripService from '../../Services/trip-service'

function NewTrip(props) {
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        tripService.newTrip(data)
            .then(x => {
                console.log(x)
                props.history.push('/')
            })
    };

    return (
        <FormWrapper>
            <h3>Ново пътуване</h3>
            <form id="new-trip-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="trip-name">Име</label>
                    <input
                        type="text"
                        id="trip-name"
                        name="trip-name"
                        spellCheck="false"
                        placeholder="New Zealand 2018"
                        ref={register({required:true})}
                    />
                    {errors.name && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="start-date">Дата на заминаване</label>
                    <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        ref={register({required:true})}
                    />
                    {errors.startDate && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="end-date">Дата на връщане</label>
                    <input
                        type="date"
                        id="end-date"
                        name="end-date"
                        ref={register({required:true})}
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