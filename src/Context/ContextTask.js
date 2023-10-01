import React from 'react';
import { useState } from "react"

const TasksContext = React.createContext({});
//const defaulttodo=[];

function TasksContextProvider({children}){

    //const [tasks, setTasks] = useState(defaulttodo)

    const [tasks, setTasks] = useState(() => {
        const todosFromStorage = localStorage.getItem('TODOS_V1');
        if (todosFromStorage) return JSON.parse(todosFromStorage)
        return []
      });
      
      const saveTodos = (newtasks) =>{
        localStorage.setItem('TODOS_V1',JSON.stringify(newtasks));
        setTasks(newtasks);
      };
    return (
        <TasksContext.Provider value={{tasks,saveTodos}}>
            {children}
        </TasksContext.Provider>
    );
}

export {TasksContext,TasksContextProvider};