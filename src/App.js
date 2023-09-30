import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodobutton } from './TodoButton';
import { TodoContainer } from './TodoContainer';
import { Setfooter } from './footer';
import { useState } from "react"

const defaultTodos=[];


function App() {

  const [tasks, setTasks] = useState(defaultTodos);
  const [btnaddtask,setbtnAddtask]=useState(false);  
  

  return (
    <React.Fragment>
      <div className='mastercontainer'>
        <TodoCounter />
        <TodoSearch />
        <div className='containerFull'>
          <div className='box'><CreateTodobutton showpopup={btnaddtask} setAddtask={setbtnAddtask}/></div>
          <div className='box'><TodoContainer key={1} tasks={tasks} setTasks={setTasks} /></div>   
        </div>        
        {btnaddtask && <TodoItem key={2} tasks={tasks} setTasks={setTasks} setbtnAddtask={setbtnAddtask} />}
        <Setfooter />
      </div>
      
    </React.Fragment>
  );
}
export default App;
