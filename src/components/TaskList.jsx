import React, { useEffect, useState, useContext } from 'react'

import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
// console.log(tasks)

function TaskList() {

  const { tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl text-center'>No hay tareas aun</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2 '>{tasks.map(task =>

      <TaskCard task={task} key={task.id}></TaskCard>

    )

    }</div>
  )



}

export default TaskList