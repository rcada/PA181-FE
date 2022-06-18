import React from 'react'
import { StyledDiv } from '.';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Schedule = () => {
    const [cleanings, setCleanings] = useState();

    useEffect(() => {
        fetch("https://pa181-block-cleaning-server.us-south.cf.appdomain.cloud/cleaning").then(results => results.json()).then(results => setCleanings(results));
    }, []);

    // component
    // const getItems() => {
    //     fetch("https://pa181-block-cleaning-server.us-south.cf.appdomain.cloud/cleanings").then(results => results.json()).then(results => console.log(results));
    // }

  return (
    <StyledDiv>
        <h2>Schedule</h2>
        <StyledList>
            {cleanings && cleanings.result.map((cleaning, index) => {
                        let from = new Date(cleaning.datetime_from);
                        let to = new Date(cleaning.datetime_to)
                        return (
                        <>
                            <h3>{cleaning.street}</h3>
                            <div key={index}>
                                <li >From: {from.getDate()}.{from.getMonth()}.  {from.getFullYear()}    {from.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</li>
                                <li >To: {to.getDate()}.{to.getMonth()}.  {to.getFullYear()}    {to.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</li>
                            </div>
                        </>
                        )
                    })}
        </StyledList>
        

    </StyledDiv>
    )
}

const StyledList = styled.div`
    justify-content: left;
    width: 300px;
`

export default Schedule;
