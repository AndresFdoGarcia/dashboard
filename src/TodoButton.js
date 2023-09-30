import './Styles/TodoButton.css';

function CreateTodobutton({showpopup,setAddtask}){
    return(
      <>
        <h2>Uso básico</h2>
        <ul>
          <li>Agrega una nueva tarea aquí <button onClick={()=> setAddtask(!showpopup) }>Aumenta +</button></li>
          <li>Luego de creadas, las tareas pueden tener dos estados <i className="tdo">En progreso</i> y <i className="donet">Realizadas</i></li>
        </ul>
        
      </>
      
    );
}

export {CreateTodobutton};