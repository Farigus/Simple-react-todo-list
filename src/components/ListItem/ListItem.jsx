import React from "react";
import s from "./ListItem.module.css"
import { deleteTodoActionCreator, doneTodoActionCreator } from "../../redux/todo-reducer";



const ListItem = (props) => {


  let deleteTodo = () => {
    props.dispatch(deleteTodoActionCreator(props.id));
  }

  let doneTodo = () => {
    props.dispatch(doneTodoActionCreator(props.id))
  } 

return(
  <div className={`${s.wrapper} ${props.isDone ? s.done : ""}`}>
    <p className={s.item__text}>{props.todo}</p>
    <div className={s.item__actions}>
      <button onClick={doneTodo} title="Sign as done" className={s.item__actions_done
      }></button>
      <button onClick={deleteTodo}  title="Delete" className={s.item__actions_delete}></button>
    </div>
  </div>

)


}

export default ListItem;