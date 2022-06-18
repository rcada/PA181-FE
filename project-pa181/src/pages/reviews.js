import React from 'react'
import { StyledDiv } from '.';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch("https://pa181-block-cleaning-server.us-south.cf.appdomain.cloud/evaluation").then(results => results.json()).then(results => results.result && setReviews(results.result));
    }, []);

  return (
    <StyledDiv>
        <h2>Reviews</h2>
        <StyledList>
            {reviews && reviews.map((cleaning, index) => {
                        return <li key={index}>{cleaning.note}</li>
                    })}
        </StyledList>
    </StyledDiv>
    )
}

const StyledList = styled.div`
    justify-content: left;
    width: 500px;
`

export default Reviews;
