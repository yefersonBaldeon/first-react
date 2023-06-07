import React, { useEffect, useState } from 'react'

import TaskCard from './TaskCard'

// console.log(tasks)

function TaskList({ Tasks }) {

  if (Tasks.length === 0) {
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div>{Tasks.map(task =>

      // <div key={one.id}>

      //   <h1>{one.title}</h1>
      //   <p>{one.description}</p>

      // </div>
      <TaskCard task={task} key={task.id}></TaskCard>

      )

    }</div>
  )



}

export default TaskList