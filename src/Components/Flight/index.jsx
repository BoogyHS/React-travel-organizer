import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

//services
import tripService from '../../Services/trip-service';
// import flightService from '../../Services/flight-service';

//contexts
import userContext from '../../Contexts/UserContext';

function FlightForm() {
    const { register, handleSubmit, errors } = useForm();
    const [user,] = useContext(userContext);
    const [trips, setTrips] = useState(null);

    const onSubmit = data => {
        console.log(data);
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
            <h3>Добави полет</h3>
            <form id="flight-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="tripId">Дестинация</label>
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
                    <label htmlFor="from">От</label>
                    <input 
                    type="text" 
                    id="from" 
                    name="from"
                    spellCheck="false" 
                    placeholder="Sofia" 
                    ref={register({ required: true })}
                    />
                    {errors.from && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="to">До</label>
                    <input 
                    type="text" 
                    id="to" 
                    name="to"
                    spellCheck="false" 
                    placeholder="Berlin Schoenefeld" 
                    ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="date-time">Излитане</label>
                    <input 
                    type="datetime-local" 
                    id="date-time"
                    name="date-time" 
                    ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
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
                labelText="Бележки"
                register={register}
                ></TextArea>
                <div>
                    <label></label>
                    <FormButton value="Запази" id="flight-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default FlightForm