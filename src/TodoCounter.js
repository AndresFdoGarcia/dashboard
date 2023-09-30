import './Styles/TodoCounter.css';

const estilos ={  
  fontSize: '24px',
  textAling: 'center',
  margin: 0,
  padding: '48px'
}

function TodoCounter({total,completed}){
    return(
      <h1 style={estilos}>
        Has completado {completed} de {total}
      </h1>
    );
  }

  export {TodoCounter};