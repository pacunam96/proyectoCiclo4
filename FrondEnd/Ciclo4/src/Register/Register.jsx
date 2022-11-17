import React, {useState} from 'react'
import { Button, ParentComponent, Form, Input, ButtonContainer, Title  } from '../styles/styled'

const Register = ({register})=> {

    const [registerInfo, setRegisterInfo] = useState({
        nombre: "",
        email: "",
        direccion: "",
        ciudad: "",
        telefono: "",
        contrasenia1: "",
        contrasenia2: "",
    })

  return (
    <div>
        <ParentComponent>
            <Title>
                Registrarse
            </Title>
            <Form onSubmit={(e)=>register(e, registerInfo)}>
                <Input placeholder='Nombre o razón social' onChange={(e)=> setRegisterInfo({...registerInfo,nombre : e.target.value})}/>
                <Input placeholder='E-mail' onChange={(e)=> setRegisterInfo({...registerInfo,email : e.target.value})}/>
                <Input placeholder='Dirección' onChange={(e)=> setRegisterInfo({...registerInfo,direccion : e.target.value})}/>
                <Input placeholder='Ciudad' onChange={(e)=> setRegisterInfo({...registerInfo,ciudad : e.target.value})}/>
                <Input placeholder='Teléfono de contacto' onChange={(e)=> setRegisterInfo({...registerInfo,telefono : e.target.value})}/>
                <Input placeholder='Contraseña' onChange={(e)=> setRegisterInfo({...registerInfo,contrasenia1 : e.target.value})}/>
                <Input placeholder='Confirma tu contraseña' onChange={(e)=> setRegisterInfo({...registerInfo,contrasenia2 : e.target.value})}/>
                <ButtonContainer>
                    <Button >Cancelar</Button>
                    <Button btnType="Ingresar" type='submit'>Registrar</Button>
                </ButtonContainer>
            </Form>
        </ParentComponent>
    </div>
  )
}
export default Register