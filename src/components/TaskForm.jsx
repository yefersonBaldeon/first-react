

import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'



function TaskForm() {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const { CreateTask } = useContext(TaskContext)
    // console.log(value)




    function handleTitle(e) {

        e.preventDefault()
        CreateTask({
            title: Title,
            description: Description,
        })

        setTitle("")
        setDescription("")
    }


    return (

        <div className='max-w-md mx-auto'>
            <form action="" onSubmit={handleTitle} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold mb-3 text-white'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' type="text" placeholder='write your homework' value={Title} onChange={one => { setTitle(one.target.value) }} autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='write your task' value={Description} onChange={one => { setDescription(one.target.value) }}></textarea>
                <button
                className='bg-indigo-500 px-3 py-1 '
                >Save</button>
            </form>
        </div>

    )
}

export default TaskForm