import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
//import { TodoItem } from './TodoItem';
import { CreateTodobutton } from './TodoButton';
import { TodoContainer } from './TodoContainer';


const defaultTodos=[
  {id: 1,title:"Tarea 1",text: "Cortar cebolla",list: 1},
  {id: 2,title:"Tarea 2",text: "Asar carne",list: 2},
  {id: 3,title:"Tarea 3",text: "Prepara jugo",list: 1}  
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />      
        <TodoContainer tasks={defaultTodos} />
      <CreateTodobutton />      
    </React.Fragment>
  );
}
export default App;
