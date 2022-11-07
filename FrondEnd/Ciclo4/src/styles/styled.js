import styled, { css } from "styled-components"

export const ParentComponent = styled.div`   
    width: 350px;
    height: auto;
    margin: 0 auto;
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    `

export const LogoContainer = styled.div`
    width: 100px;
`

export const Image = styled.img`
    width: 100%;
`
export const Form = styled.form`
    width: 100%;
    height: auto;
`


export const Input = styled.input` 
    padding: 10px;
    width: 94%;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px dotted gray;
    color: gray;
    font-size: 20px;
`
export const ButtonContainer = styled.div` 
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
        background-color: #94B076;
    `}
` 
export const Title = styled.h1 `
    font-size: 40px;
    color: #6F8A4F;
`