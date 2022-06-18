import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <StyledDiv><h1>Block Cleaning Notification + Evaluation System</h1>
    <StyledP>As part of Brno’s ecological and clean city initiative we propose a notification + evaluation system for block cleaning (with a possible extension to the trash services). Our system is a prototype of a simple web application, which allows a user to sign-up for an e-mail newstletter, which sends notifications about upcoming block cleanings. The app will also allow users to evaluate the cleanings and leave notes to the city workers performing them. These evaluations and notes are then processed into statistical charts for different city districts and a wall of appreciation and feedback. We hope this can lead to greater ecological awareness and the building of the city’s community spirit.

The main dataset needed is the schedule of the block cleanings, the data from the signed-up users, and the evaluation data.
</StyledP></StyledDiv>
    )
}

export default Home;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px 0 20px;
`

const StyledP = styled.p`
  padding: 0 50px 0 50px;
`