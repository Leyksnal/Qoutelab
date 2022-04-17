import React from 'react'
import QouteHeader from './components/QouteHeader/QouteHeader'
import styled from 'styled-components'
import QoutePhase from './components/QoutePhase/QoutePhase';

export default function App() {
  return (
    <Container>
      <QouteHeader/>
      <QoutePhase/>
    </Container>
  )
}


const Container = styled.div`
background: rgb(22,26,66);
background: radial-gradient(circle, rgba(22,26,66,1) 0%, rgba(16,18,34,1) 24%, rgba(13,16,41,1) 48%, rgba(30,35,84,1) 74%, rgba(22,26,66,1) 100%);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;