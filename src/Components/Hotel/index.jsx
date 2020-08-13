import React, { useContext, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

//services
import tripService from '../../Services/trip-service';
import countryService from '../../Services/country-service';
import hotelService from '../../Services/hotel-service';

//contexts
import userContext from '../../Contexts/UserContext';

function HotelForm() {
    const { register, handleSubmit, errors } = useForm();
    const [user,] = useContext(userContext);
    const [trips, setTrips] = useState(null);
    const [countries, setCountries] = useState(null);

    const onSubmit = data => {
        hotelService.addHotel(data)
        .then(res=>{
            console.log(res);
        })
    };

    useEffect(() => {
        tripService.getTrips(user._id)
            .then(trips => {
                setTrips(trips);
            })
            .catch(err => console.log(err));

        countryService.getCountries()
            .then(countries => { 
                setCountries(countries);
            })
            .catch(err => console.log(err));
    }, [user._id]);

    return (
        <FormWrapper>
            <h3>Добави хотел</h3>
            <form id="hotel-form" onSubmit={handleSubmit(onSubmit)}>
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
                    <label htmlFor="country">Държава</label>
                    <select
                        id="country"
                        name="country"
                        ref={register({ required: true })}
                    >
                        {countries
                            ? countries.map((country) =>
                                <option value={`${country.name}`} key={`${country._id}`}>{country.name}</option>)
                            : <option value="default">default</option>
                        }
                    </select>
                    {errors.country && <p>This field is required</p>}
                </div>
                <div>
                    <label htmlFor="city">Град</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        spellCheck="false"
                        placeholder="Sofia"
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="hotel-name">Име на хотел</label>
                    <input
                        type="text"
                        id="hotel-name"
                        name="hotel-name"
                        spellCheck="false"
                        placeholder="Ibis hotel"
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="check-in">Настаняване</label>
                    <input
                        type="date"
                        id="check-in"
                        name="check-in"
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="check-out">Напускане</label>
                    <input
                        type="date"
                        id="check-out"
                        name="check-out"
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
                    <FormButton value="Запази" id="hotel-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default HotelForm