import React from 'react'

function TaskCard({task}) {

    function eliminar(){
        alert("eliminando")
    }


    return (
        <div key={task.id}>

            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={eliminar}> eliminar boton</button>
        </div>


    )
}

export default TaskCard

