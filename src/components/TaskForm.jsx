

import React, { useState } from 'react'


function TaskForm({ CreateTask }) {

    const [Title, setTitle] = useState("")

    const [Description, setDescription] = useState("")

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
        <form action="" onSubmit={handleTitle}>

            <input type="text" placeholder='write your homework' value={Title} onChange={one => { setTitle(one.target.value) }} autoFocus />
            <textarea placeholder='write your task' value={Description} onChange={one => { setDescription(one.target.value) }}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TaskForm