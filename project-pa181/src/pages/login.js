import React from 'react'
import { StyledDiv } from '.';
import styled from 'styled-components';
import { useState } from 'react';

const Registration = () => {
    const initialValues = {email: '', street: '', district: ''};
    const [formValues, setFormValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formValues));
        fetch("https://pa181-block-cleaning-server.us-south.cf.appdomain.cloud/user", {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(formValues)
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

  return (
    <StyledDiv><h2>Send us an email to receive notifications about block cleaning</h2>
        <form onSubmit={handleSubmit}>
            <Flex>
                <label>E-mail:</label>
                <TextBox onChange={handleChange} value={formValues.email} name="email"/>
                <label>Street:</label>
                <TextBox onChange={handleChange} value={formValues.street} name="street"/>
                <label>District:</label>
                <TextBox onChange={handleChange} value={formValues.district} name="district"/>
                <StyledButton type="submit">Send</StyledButton>
            </Flex>
            
        </form>
    </StyledDiv>
    )
}

export default Registration;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextBox = styled.input`
    height: 20px;
    width: 200px;
    margin: 5px;
`
export const StyledButton = styled.button`
    margin: 5px;
    height: 25px;
`