import React, { useState } from 'react'
import ComponenteInicio from './components/ComponenteInicio.jsx'
import LogIn from './LogIn/LogIn'
import Register from './Register/Register'
import LogInSuccesful from './LogIn/LogInSuccesful'
import { Fragment } from 'react'

const App = () => {

    const [component, setComponent] = useState (null);
    

    const handleSubmitRegister = (e, value) => {
        e.preventDefault();
        console.log(value);
        /*
        if(value !==null){
            setComponent(<LogIn logIn={handleSubmitLogIn}/>)
        }*/

    }

    const handleSubmitLogIn = (e, value) => {
        e.preventDefault();
        console.log(value);
    }

    const handleClick = (btn) => {
        if(btn === "Register"){
            setComponent(<Register register={handleSubmitRegister}/>)
        }
        if(btn === "LogIn"){
            setComponent(<LogIn logIn={handleSubmitLogIn}/>)
        }
    }

    return (
    <>
        <header>
            <button onClick={() => handleClick ("Register")}>Registrarse</button>
            <button onClick={() => handleClick ("LogIn")}>Ingresar</button>
        </header>
        <h1>Venta Reciclaje <hr/></h1>
        {component}
    </>
    )
    
}

export default App