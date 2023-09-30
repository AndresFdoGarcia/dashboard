
function TodoContainer({tasks,setTasks}){
    
    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log(item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })
        setTasks(newState);
    }

    const deleteItem = (id) =>{
        const nuevoT = [...tasks];
        const taskIndex = nuevoT.findIndex(
          (defaultTodo) => defaultTodo.id == id);
        nuevoT.splice(taskIndex,1);
        setTasks(nuevoT);
      }


    const CompletedTastks = tasks.filter(item=> item.list === 3).length;
    const AllTastks = tasks.length;    

    return(
        <>
            {AllTastks >0 && <h3>Tareas completadas {CompletedTastks} de {AllTastks}</h3>}
            <div className="drag-and-drop">
                <div className="column column--1" droppable="true">
                <h3>
                        Tareas por hacer
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <button className='closert' onClick={()=>deleteItem(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </button>                              
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.author}</p>
                                <p className='body'>{item.date}</p>
                            </div>
                        ))}
                    </div>                  
                </div>
                <div className='column column--2'>
                    <h3>
                        Tareas en progreso
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.author}</p>
                                <p className='body'>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--3'>
                    <h3>
                        Tareas realizadas
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>                                
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.author}</p>
                                <p className='body'>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>             
            </div>          
        </>        
    );

}
export {TodoContainer};