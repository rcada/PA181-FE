import React, { useState } from 'react'
import { StyledDiv } from '.';
import { Flex, StyledButton, TextBox } from './login';
import styled from 'styled-components';

const LeaveReview = () => {
    const initialValues = {email: '', street: '', district: '', stars: undefined, note: ''}
    const [formValues, setFormValues] = useState(initialValues)


     const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formValues));
        fetch("https://pa181-block-cleaning-server.us-south.cf.appdomain.cloud/evaluation", {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(formValues)
        })
    }
  return (
    <StyledDiv><h2>Leave a review</h2>
    <form onSubmit={handleSubmit}>
        <Flex>
            <label>E-mail:</label>
                <TextBox onChange={handleChange} value={formValues.email} name="email"/>
                <label>Street:</label>
                <TextBox onChange={handleChange} value={formValues.street} name="street"/>
                <label>District:</label>
                <TextBox onChange={handleChange} value={formValues.district} name="district"/>
                <label>Stars:</label>
                <div onChange={handleChange}>
                    <input type="radio" value="1" name="stars"/>1
                    <input type="radio" value="2" name="stars"/>2
                    <input type="radio" value="3" name="stars"/>3
                    <input type="radio" value="4" name="stars"/>4
                    <input type="radio" value="5" name="stars"/>5
                </div>
                <label>Note:</label>
                <StyledTextFiled onChange={handleChange} value={formValues.note} name="note"/>
                
                <StyledButton type="submit">Send</StyledButton>
        </Flex>
    </form>
    </StyledDiv>
    )
}

export const StyledTextFiled = styled.textarea`
    height: 40px;
    width: 200px;
    margin: 5px;
`

export default LeaveReview;