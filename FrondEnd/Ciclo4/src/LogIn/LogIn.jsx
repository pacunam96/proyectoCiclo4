import React, {useState} from 'react'
import { Button, ParentComponent, Form, Input, ButtonContainer, Title  } from '../styles/styled'

const LogIn = ({logIn}) => {

    const [LogInInfo, setLogInInfo] = useState({
        email: "",
        contrasenia: "",
    })
console.log(LogInInfo)

  return (
    <div>
        <ParentComponent>
            <Title>
                Ingresar
            </Title>
            <Form onSubmit={(e)=>logIn(e, LogInInfo)}>
                <Input placeholder='Correo' onChange={(e)=> setLogInInfo ({...LogInInfo, email: e.target.value})}/>
                <Input placeholder='Contraseña' onChange={(e)=> setLogInInfo ({...LogInInfo, contrasenia: e.target.value})} />                
                <ButtonContainer>
                    <Button>Cancelar</Button>
                    <Button btnType="Ingresar">Ingresar</Button>
                </ButtonContainer>
            </Form>
        </ParentComponent>
    </div>
  )
}

export default LogIn