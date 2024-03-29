//REFACTORING NEEDED

import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

//services
import tripService from '../../Services/trip-service';
import flightService from '../../Services/flight-service';

//contexts
import userContext from '../../Contexts/UserContext';

function FlightForm(props) {
    const { register, handleSubmit, errors } = useForm();
    const [user,] = useContext(userContext);
    const [trips, setTrips] = useState(null);

    const onSubmit = data => {

        // console.log(data["date-time"])
        flightService.addFlight(data)
            .then(res => {
                props.history.push('/my-trips');
                // console.log(res);
            })
    };

    useEffect(() => {
        tripService.getTrips(user._id)
            .then(trips => {
                setTrips(trips);
            })
            .catch(err => console.log(err))
    }, [user._id]);

    return (
        <FormWrapper>
            <h3>Add flight</h3>
            <form id="flight-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="tripId">Destination</label>
                    <select
                        id="tripId"
                        name="tripId"
                        ref={register({ required: true })}
                    >
                        {trips
                            ? trips.map((trip) =>
                                <option value={`${trip._id}`} key={`${trip._id}`}>{trip.name}</option>)
                            : <option value="default">default</option>
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="departure">From</label>
                    <input
                        type="text"
                        id="departure"
                        name="departure"
                        spellCheck="false"
                        placeholder="Sofia"
                        ref={register({ required: true })}
                    />
                    {errors.departure && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="destination">To</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        spellCheck="false"
                        placeholder="Berlin Schoenefeld"
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="date-time">Date</label>
                    <input
                        type="datetime-local"
                        id="date-time"
                        name="date-time"
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        ref={register}
                    />
                </div>
                <TextArea
                    id="notes"
                    name="notes"
                    labelText="Notes"
                    register={register}
                ></TextArea>
                <div>
                    <label></label>
                    <FormButton value="Save" id="flight-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default FlightForm