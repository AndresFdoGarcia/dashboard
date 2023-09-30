import './Styles/TodoItem.css';

function TodoItem(props){
  
  console.log(props)
    return(
      <>
      <li>
        <strong>{props.title}</strong>        
        <p>{props.text}</p>       
      </li>
      </>      
    );
  }
export {TodoItem};