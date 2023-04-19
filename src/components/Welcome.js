import {useState,useEffect} from 'react';

export default function Welcome(props){
    const[count,setCount]=useState(0)
    const[semaforo,setSemaforo]=useState(false)
    const {name}=props;

    useEffect(()=>{
        console.log("se cambia de color")
    },[semaforo])

    const contar=()=>{
        setCount(count+1)
        setSemaforo(!semaforo)
    }
    return(
        <div>
            <p>Hola {name}</p>
            <button onClick={contar}>Sumar +1</button>
            <h1>El semaforo esta en {semaforo ? 'rojo':'verde'}</h1>
            <p>{count}</p>
        </div>
    )
}