import React from 'react'
import FormWrapper from '../common/FormWrapper'
import FormButton from '../common/FormButton'
import TextArea from '../common/TextArea'

function HotelForm() {
    return (
        <FormWrapper>
            <h3>Запази хотел</h3>
            <form id="hotel-form">
                <div>
                    <label htmlFor="country">Държава</label>
                    <select id="country" name="country">
                        <option value="default">default</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="city">Град</label>
                    <input type="text" id="city" spellCheck="false" placeholder="Sofia" />
                </div>
                <div>
                    <label htmlFor="hotel-name">Име на хотел</label>
                    <input type="text" id="hotel-name" spellCheck="false" placeholder="Ibis hotel" />
                </div>
                <div>
                    <label htmlFor="check-in">Настаняване</label>
                    <input type="date" id="check-in" />
                </div>
                <div>
                    <label htmlFor="check-out">Напускане</label>
                    <input type="date" id="check-out" />
                </div>
                <div>
                    <label htmlFor="price">Цена</label>
                    <input type="number" id="price" min="0" />
                </div>
                <TextArea id="notes" labelText="Бележки"></TextArea>
                <div>
                    <label></label>
                    <FormButton value="Запази" id="hotel-button"></FormButton>
                </div>
            </form>
        </FormWrapper>
    )
}

export default HotelForm