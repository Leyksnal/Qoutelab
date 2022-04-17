import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { QouteContext } from '../QouteState/QouteState';

export default function QoutePhase() {

    const { qouteFrame, setQouteFrame} = useContext(QouteContext)

    const [textArea, setTextArea] = useState()
    const [input, setInput] = useState()

    const action =()=>{
        const data ={
            id: Math.ceil(Math.random() * 1000),
            qoute: textArea,
            author: input
        }

        setQouteFrame([...qouteFrame, data]);
        localStorage.setItem("QouteEntry", JSON.stringify(qouteFrame))
    }

  return (
    <>
    <Wall>
        <Container>
            <Wrapper>
                <textarea name="" id="" cols="30" rows="10" placeholder='Qoute' value={textArea} onChange={(e) =>{
                    setTextArea(e.target.value)
                }}></textarea>
                <input type="text" placeholder='Author' value={input} onChange={(e) =>{
                    setInput(e.target.value)
                }}/>
                <Link to={'/post'}><Button onClick={action}>Post</Button></Link>
            </Wrapper>
        </Container>
    </Wall>
    </>
  )
}

const Wall = styled.div`
background: rgb(22,26,66);
background: radial-gradient(circle, rgba(22,26,66,1) 0%, rgba(16,18,34,1) 24%, rgba(13,16,41,1) 48%, rgba(30,35,84,1) 74%, rgba(22,26,66,1) 100%);
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;


const Container = styled.div`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin-top: 180px;
    width: 440px;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    textarea{
        resize: none;
        border: none;
        outline: none;
        border-radius: 10px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #0D1117;
        width: 350px;
        height: 200px;
    }

    input{
        width: 200px;
        height: 30px;
        margin-top: 10px;
        color: #0D1117;
        font-size: 1rem;
        font-weight: 600;
        color: #0D1117;
        border-radius: 8px;
        outline: none;
        border: none;
    }
`;

const Button = styled.button`
    text-decoration: none;
    margin-top: 15px;
    width: 100px;
    height: 40px;
    background-color: #1c51aa;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    transition: all 400ms;

    :hover{
        background-color: #0B0D21;
        cursor: pointer;
    }
`;