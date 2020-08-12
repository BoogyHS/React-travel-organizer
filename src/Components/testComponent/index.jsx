import React from 'react'

import FormButton from '../common/FormButton'

import testService from '../../Services/test-service'

function Test() {
    const handleSubmit = () => { testService.addCountries()}
    // const handleSubmit = (ev) => { 
    //     ev.preventDefault()
    //     testService.getCountries()
    //     .then(res=>console.log(res))
    // }
    return (
        <form id="sign-form" onSubmit={handleSubmit}>
            <label></label>
            <FormButton value="тест" id="login-button"></FormButton>
        </form>
    )
}

export default Test