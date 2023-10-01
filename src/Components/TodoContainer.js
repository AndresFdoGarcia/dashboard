import React from 'react';
import { FaWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { ModalContext } from "../Context/ModalContext";

function TodoContainer({tasks,setTasks}){

    const {isModalVisible, openModal, closeModal, modalData} = React.useContext(ModalContext);

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id);        
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id == itemID) return item;
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
    };
    
    const alerttaks=(id)=>{
        const evaluateItem = tasks.find(item=>item.id==id);           
        
        if(evaluateItem.priority == false){            
            evaluateItem.priority=true;
            
            const newState = tasks.map(item => {                
                if(item.id == id) return evaluateItem;              
                return item;                
            })

            setTasks(newState);
        }
        else{
            evaluateItem.priority=false;            
            const newState = tasks.map(item => {                
                if(item.id == id) return evaluateItem;
                return item;
            })
            setTasks(newState);
        }
    }

    const handleClick = (item) => {
        openModal(item);
        console.log(item)
    };

    const CompletedTastks = tasks.filter(item=> item.list === 3).length;
    const AllTastks = tasks.length;

    return(
        <>
            {AllTastks >0 && <h3>Tareas completadas {CompletedTastks} de {AllTastks}</h3>}
            {AllTastks <1 && <h3>Crea tu primera tarea !!</h3>}
            <div className="drag-and-drop">
                <div className="column column--1" droppable="true">
                <h3>
                        Tareas por hacer
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className={item.priority ? 'dd-element important' : 'dd-element'} id={'dd-element'+((item.id).toString())} key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)} >                               
                                <button className='closert' onClick={()=>deleteItem(item.id)}><FaWindowClose /></button>
                                <button className='edit' onClick={()=>handleClick(item)}><FaEdit /></button>
                                <button className={item.priority ? 'importanticon activated' : 'importanticon'} id={'importanticon'+((item.id).toString())} onClick={()=>alerttaks(item.id)}><AiFillAlert /></button>
                                <div className="fakeheader"></div>
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
                            <div className={item.priority ? 'dd-element important' : 'dd-element'} key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <button className='edit' onClick={()=>deleteItem(item.id)}><FaEdit /></button>
                                <button className={item.priority ? 'importanticon activated' : 'importanticon'} id={'importanticon'+((item.id).toString())} onClick={()=>alerttaks(item.id)}><AiFillAlert /></button>
                                <div className="fakeheader"></div>
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