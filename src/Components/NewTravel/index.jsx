import React from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'

function NewTravel(props) {

    return (
        <FormWrapper>
            <h3>Ново пътуване</h3>
            <form id="new-travel-form">
                <div>
                    <label htmlFor="travel-name">Име</label>
                    <input type="text" id="travel-name" spellCheck="false" placeholder="New Zealand 2018" />
                </div>
                <div>
                    <label htmlFor="start-date">Дата на заминаване</label>
                    <input type="date" id="start-date" />
                </div>
                <div>
                    <label htmlFor="end-date">Дата на връщане</label>
                    <input type="date" id="end-date" />
                </div>
                <div>
                    <label></label>
                    <FormButton value="Създай" id="new-travel-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default NewTravel