import React, { createContext, useState ,useEffect} from 'react'


import { tasks as data } from '../data/task'


export const TaskContext = createContext()


export function TaskContextProvider(props) {


    const [tasks, setTasks] = useState([])



    function CreateTask(task) {
        setTasks([...tasks, {
            id: tasks.length,
            title: task.title,
            description: task.description,

        }])
    }

    function deleteTask(taskIdd) {
        setTasks(tasks.filter(one => one.id !== taskIdd))
        console.log(taskIdd)
    }


    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{

            tasks,
            deleteTask,
            CreateTask,

        }}>
            {props.children}

        </TaskContext.Provider>

    )
}


