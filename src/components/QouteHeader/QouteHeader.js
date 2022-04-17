import React from 'react'
import styled from 'styled-components'
import {AiOutlineDingtalk} from 'react-icons/ai'

export default function QouteHeader() {
  return (
    <>
        <Container>
            <Wrapper>
                <AiOutlineDingtalk size={'3rem'}/>
                <span>qouteLamb</span>
            </Wrapper>
        </Container>
    </>
  )
}


const Container = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5a66d15d;
    width: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;


    span{
        font-size: 2rem;
        font-family: Lobster;
    }
`;