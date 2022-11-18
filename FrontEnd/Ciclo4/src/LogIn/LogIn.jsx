import React, {useState} from 'react'
import { Button, ParentComponent, Form, Input, ButtonContainer, Title  } from '../styles/styled'

const LogIn = ({logIn}) => {

    const [LogInInfo, setLogInInfo] = useState({
        email: "",
        contrasenia: "",
    })
console.log(LogInInfo)

  return (
    <div class="pantalla_ingreso">
        <ParentComponent>
            {/*Seccion de título*/}
            <div>
                <Title class="Tit_Ingreso">
                    Ingresar
                </Title>
            </div>

            {/*Seccion de ingreso de datos*/}       
            <div style={{ backgroundImage: "url(/imagen.png)", width:400, height:500, opacity:0.5, backgroundRepeat: 'no-repeat'}}>    
                <Form onSubmit={(e)=>logIn(e, LogInInfo)}>
                <Input placeholder='Correo' onChange={(e)=> setLogInInfo ({...LogInInfo, email: e.target.value})}/>
                <Input placeholder='Contraseña' onChange={(e)=> setLogInInfo ({...LogInInfo, contrasenia: e.target.value})} />                
                </Form>
                
                <ButtonContainer>
                    <Button>Cancelar</Button>
                    <Button btnType="Ingresar">Ingresar</Button>
                </ButtonContainer>
            </div>

            {/*Seccion nueva cuenta y recuperar contraseña*/}
            <div>
                <ButtonContainer class="opciones">
                    <Button btnType="OtraOp">Olvide mi contraseña</Button>
                    <Button btnType="OtraOp">Crear nueva cuenta</Button>
                </ButtonContainer>
            </div>
        </ParentComponent>
    </div>
  )
}

export default LogIn