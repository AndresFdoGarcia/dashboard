import '../Styles/TodoButton.css';

function CreateTodobutton({showpopup,setAddtask}){
    return(
      <div className='Containerb'>
        <h2>Uso básico</h2>
        <ul>
          <li>Agrega tareas al dashboard con el botón de abajo</li>
          <li>Solo las tareas <i className="newdo">"por hacer"</i> se pueden eliminar </li>          
          <li>Luego de creadas, las tareas pueden tener dos estados <i className="tdo">"En progreso"</i> y <i className="donet">"Realizadas"</i></li>
          <li>Las tareas pueden obtener prioridad al dar click sobre el icono de la esquina superior izquierda. Adquieren un efecto <b>buzz</b></li>
          <li>Las tareas <i className="donet">Realizadas</i> no son editables</li>
        </ul>
        
        <img src='cheer.png'></img>
        <div className='btncontaineradd'>
          <a  className="btn btn-white btn- animate" onClick={()=> setAddtask(!showpopup) }>Agrega una tarea</a>
        </div>
        
        
      </div>
      
    );
}

export {CreateTodobutton};