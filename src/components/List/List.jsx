import React from "react";
import   s from './List.module.css'
import ListItem from ".././ListItem/ListItem"
import {updateTodoTextActionCreator, addTodoActionCreator} from "./../../redux/todo-reducer"





const List = (props) => {


  let todoText = React.createRef();

  
  let updateTodoText = () => {

  props.dispatch(updateTodoTextActionCreator(todoText.current.value));
  }

  let addTodo = () => {

    props.dispatch(addTodoActionCreator(todoText.current.value));
    props.dispatch(updateTodoTextActionCreator(''));
  }



  return(

    <div className={s.wrapper}>
        <h3 className={s.todo__title}>To do list</h3>
        <div className={s.todo__input}>
            <textarea onChange={updateTodoText}  ref={todoText} className={s.todo__input_area}type="text" value={props.state.newTodoText}></textarea>
          <button onClick={addTodo} className={s.todo__input_button}>Add</button>

        </div>

        <div className={s.list}>
        {props.state.todos.map(e => {
          return <ListItem dispatch={props.dispatch} todo={e.todo} id={props.state.todos.indexOf(e)} isDone={props.state.todos[props.state.todos.indexOf(e)].isDone}/>
        })}
        </div>
        
        
    </div>


  )
}

export default List;