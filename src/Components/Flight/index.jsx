import React from 'react'

//components
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

function FlightForm() {
    return (
        <FormWrapper>
            <h3>Добави полет</h3>
            <form id="flight-form">
                <div>
                    <label htmlFor="from">От</label>
                    <input type="text" id="from" spellCheck="false" placeholder="Sofia" />
                </div>
                <div>
                    <label htmlFor="to">От</label>
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