import '../Styles/TodoItem.css';
import { useState } from "react"

function TodoItem({tasks,setTasks,setbtnAddtask}){
  
  const [title,settitle] = useState('');
  const [person,setperson] = useState('');
  const [date,setdate] = useState('');
  const [description,setDescription]=useState('');
  const [copyarraybase, setCopyarraybase]=useState(tasks);  
  

  const CreateTask = (evt) =>{    
    const medio = {id: ((tasks.length)+1),author: person, title:title,description: description, date:date,list: 1,priority:false};    
    setCopyarraybase(copyarraybase.push(medio));    
    setTasks(copyarraybase);
    setbtnAddtask(false);
  };  

    return(
      <>
        <div className='overlay'>
          <div className='Modalcontainer'>
            <header><strong>Nueva tarea pendiente</strong></header>
            <h1>Información básica de la tarea</h1>
            <button className='closer' onClick={()=> setbtnAddtask(false) }>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <form onSubmit={(evt => CreateTask(evt))} key={(tasks.length)+1} value={copyarraybase}>
              <label htmlFor='title'>Tarea</label>
              <input type='text' required autoComplete='off' onChange={ev =>{ev.preventDefault(); settitle(ev.target.value)}}></input>
              <label htmlFor='person'>Persona a cargo</label>
              <input type='text' onChange={ev => setperson(ev.target.value)}></input>
              <label htmlFor='description'>Descripción de la tarea</label>
              <textarea type='text' maxLength={300} onChange={ev => setDescription(ev.target.value)}></textarea>
              <label htmlFor='date'>Fecha límite</label> 
              <input type='date' placeholder='dd/mm/yy' onChange={ev => setdate(ev.target.value)}></input>        
              <button>Guardar</button>
            </form>
          </div>
        </div>
      </>      
    );
  }

export {TodoItem};