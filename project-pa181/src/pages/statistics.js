import React from 'react'
import { StyledDiv } from '.';
import plot1 from './src_statistics/plot1.jpg'
import plot2 from './src_statistics/plot2.jpg'
import plot3 from './src_statistics/plot3.jpg'
import styled from 'styled-components';

const Statistics = () => {
  return (
    <StyledDiv><h1>Statistics</h1>
    <a href='/src_statistics/VISUALIZATIONS.pdf' download>Click to download visualizations</a>
    <StyledImg src={plot1}/>
    <StyledImg src={plot2}/>
    <StyledImg src={plot3}/>
    
    </StyledDiv>
    )
}

const StyledImg = styled.img`
    width: 600px;
    height: 500px;
    padding: 10px;
`

export default Statistics;
