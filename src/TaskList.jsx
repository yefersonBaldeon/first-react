import React, { useEffect, useState } from 'react'
import { tasks as data } from './task'


// console.log(tasks)




function TaskList() {

  const [Tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])


  if (Tasks.length === 0) {
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div>{Tasks.map(one => (

    <div key={one.id}>

      <h1>{one.title}</h1>
      <p>{one.description}</p>


    </div>))}</div>
  )


  // return(
  //   <div>{Tasks.map(one=>console.log("vamos"))}</div>
  // )
}

export default TaskList