import React, { useContext, useState, useEffect } from 'react'

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

//services
import tripService from '../../Services/trip-service';

//contexts
import userContext from '../../Contexts/UserContext';

function FlightForm() {
    const [user,] = useContext(userContext);
    const [trips, setTrips] = useState(null);

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
            <form id="flight-form">
                <div>
                    <label htmlFor="trip">Дестинация</label>
                    <select id="trip" name="trip">
                        {trips
                            ? trips.map((trip) =>
                                <option value={`${trip._id}`} key={`${trip._id}`}>{trip.name}</option>)
                            : <option value="default">default</option>
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="from">От</label>
                    <input type="text" id="from" spellCheck="false" placeholder="Sofia" />
                </div>
                <div>
                    <label htmlFor="to">До</label>
                    <input type="text" id="to" spellCheck="false" placeholder="Berlin Schoenefeld" />
                </div>
                <div>
                    <label htmlFor="date-time">Излитане</label>
                    <input type="datetime-local" id="date-time" />
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
                    <input type="number" id="price" min="0" />
                </div>
                <TextArea id="notes" labelText="Бележки"></TextArea>
                <div>
                    <label></label>
                    <FormButton value="Запази" id="flight-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default FlightForm