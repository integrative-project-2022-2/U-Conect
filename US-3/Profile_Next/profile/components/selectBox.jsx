import React, {useState, Fragment} from 'react'


export default function selectBox() {

    const borrar = () => {
        alert("Funcion activa")
    }

  return (
    <div className='"w-75 bg-success  text-white text-center m-auto p-3 mb-5 rounded shadow"'>
      <select>
        <option value="">Juanito</option>
        <option value="">Pedro</option>
      </select>
      <button className='btn btn-primary' onClick={borrar}>BOton</button>
    </div>
  )
}
