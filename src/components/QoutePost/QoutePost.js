import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { QouteContext } from '../QouteState/QouteState';

export default function QoutePost() {

    const { qouteFrame } = useContext(QouteContext)

    const [loader, setLoader] = useState([])
    useEffect(() =>{
        setLoader(JSON.parse(localStorage.getItem("QouteData")))
    }, [])

  return (
    <>
        <Container>
            <Wrapper>
                {/* {loader?.map((props) =>{
                    <Qoute>{props.Qoute}</Qoute>,
                    <Author>{props.Author}</Author>
                })} */}
                <Qoute>The sun is awaiting the approval for dismiss in the jungle to ncbjdbcsbcksbcsbhvshs befall n us today be it something get the hawoq</Qoute>
                <Author>~Olusoga Leke</Author>
            </Wrapper>
        </Container> 
    </>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    text-align: center;
`;
const Wrapper = styled.div`
    box-shadow: rgba(20, 24, 61, 100) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    background-color: #fff;
    color: #14183d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
`;
const Qoute = styled.div`
    font-size: 1.3rem;
    margin: 5px;
    width: 550px;
    margin: 30px;
`;
const Author = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
    font-family: 'Lobster';
`;