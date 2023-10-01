import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { CreateTodobutton } from './Components/TodoButton';
import { TodoContainer } from './Components/TodoContainer';
import { Setfooter } from './Components/footer';
import { useState } from "react"
import{TasksContextProvider,TasksContext} from './Context/ContextTask';
import {ModalContextProvider} from './Context/ModalContext'
import { ModalData } from './Components/ModalData';
function App() { 

  const [btnaddtask,setbtnAddtask]=useState(false);  

  return (
    <React.Fragment>
    <ModalContextProvider>
    <TasksContextProvider>
    <TasksContext.Consumer>
      {({tasks,saveTodos})=>(
        <div className='mastercontainer'>
          <TodoCounter />          
          <div className='containerFull'>
            <div className='box' id='box1side'><CreateTodobutton showpopup={btnaddtask} setAddtask={setbtnAddtask}/></div>
            <div className='box'><TodoContainer tasks={tasks} setTasks={saveTodos} /></div>   
          </div>                       
          {btnaddtask && <TodoItem tasks={tasks} setTasks={saveTodos} setbtnAddtask={setbtnAddtask} />}        
        </div>
      )}</TasksContext.Consumer>      
    </TasksContextProvider>
      <Setfooter />
      <ModalData />
    </ModalContextProvider> 
    </React.Fragment>
  );
}
export default App;
