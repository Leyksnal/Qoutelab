import React from 'react'
import styled from 'styled-components'

export default function QoutePhase() {
  return (
    <>
        <Container>
            <Wrapper>
                <textarea name="" id="" cols="30" rows="10" placeholder='Qoute'></textarea>
                <input type="text" placeholder='Author' />
                <button>Post</button>
            </Wrapper>
        </Container>
    </>
  )
}


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
    }

    button{
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
    }
`;