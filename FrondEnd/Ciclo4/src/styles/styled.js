import styled, { css } from "styled-components"

export const ParentComponent = styled.div`   
    width: 400px;
    height: 380px;
    margin: 50px auto;
    border: 1px solid gray;
    border-radius: 5px;
    background-color:#D0DAC4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    font-family: 'Poppins', sans-serif;
    `

export const LogoContainer = styled.div`
    width: 100px;
`

export const Image = styled.img`
    width: 100%;
`
export const Form = styled.form`
    width: 90%;
    height: auto;
    margin-top:30px;
    margin-left:5px;
`

export const Input = styled.input` 
    padding: 10px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px dotted gray;
    color: gray;
    font-size: 20px;
`
export const ButtonContainer = styled.div` 
    width: 70%;
    margin-top: 40px;
    margin-left: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

export const Button = styled.button`  
    width: 45%;
    font-family: 'Poppins', sans-serif;
    background-color: #B07A76 ;
    //background-color: ${(props) => props.btnType === "Ingresar" ? "#94B076" : "#B07A76" } ; 
    box-shadow: 0 3px 6px 0 rgb(115 103 240 / 40%);
    color: #eee;
    border: none;
    border-radius: 5px;
    font-size: 1.25em;
    letter-spacing: 1px;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    ${({btnType}) => btnType === "Ingresar" && css `
        &:hover{
            transform: scale(1.2)
        }
        background-color: #E2E1B7;
        color: #6F8A4F;
    `}

    ${({btnType}) => btnType === "OtraOp" && css `
        &:hover{
            transform: scale(1.2)
        }
        font-size: 10px;
        background-color: #D0DAC4;
        color: #85B027;
        border: #85B027;
        width: 200px;
        height: 30px;
        margin: 0 auto;
    `}

`

export const Title = styled.h1 `
    font-size: 30px;
    color: #6F8A4F;
`

