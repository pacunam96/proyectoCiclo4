import React from 'react'
import ComponenteInicio from './components/ComponenteInicio'

const App = () => {
    const greeting = {
        hello: "¿Cómo funciona?",
        subText: "Soy el hijo de Class Component"
    }
    return <ComponenteInicio />
}

export default App