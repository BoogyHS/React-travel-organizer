import React from 'react'

import FormButton from '../common/FormButton'

import countryService from '../../Services/country-service'

function Test() {
    // const handleSubmit = (ev) => { ev.preventDefault(); countryService.addCountries()}
    const handleSubmit = (ev) => { 
        ev.preventDefault()
        countryService.getCountries()
        .then(res=>console.log(res))
    }
    return (
        <form id="sign-form" onSubmit={handleSubmit}>
            <label></label>
            <FormButton value="test" id="login-button"></FormButton>
        </form>
    )
}

export default Test