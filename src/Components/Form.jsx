import React, { useState } from 'react'
import Card from './Card'
import './Form.css'

const Form = () => {
    const [user, setUser] = useState({
        deporte: '',
        nombre: '',
        jugador: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.charAt(0) !== " " && user.nombre.length >= 3 && user.jugador.length >= 6 && user.deporte !== ''){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div className='div'>
        <h1>Deportes</h1>
        <form onSubmit={handleSubmit}>
            <label>¿Que deporte prefiere?</label>
            <select value={user.deporte} onChange={(e) => setUser({...user, deporte: e.target.value})}>
                <option value="">Seleccione una opción</option>
                <option value="Futbol">Futbol</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
                <option value="badminton">badminton</option>
            </select>
            <input className='input' placeholder="Nombre completo" type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <input className='input' placeholder="Jugador favorito" type="text" value={user.jugador} onChange={(e) => setUser({...user, jugador: e.target.value})}/>
            <button>Enviar</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card deporte={user.deporte} nombre={user.nombre} jugador={user.jugador}/>}
    </div>
  )
}

export default Form