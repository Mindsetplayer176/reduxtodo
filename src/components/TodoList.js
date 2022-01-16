import React from 'react';
import TodoInput from './TodoInput';
import "./TodoList.css";
import Todo from "./Todo";
import{CSSTransition , TransitionGroup}from 'react-transition-group';
import{useSelector , useDispatch} from "react-redux";
import { completeTodo } from '../redux/Action';
import { addTodo ,removeTodo , updateTodo} from '../redux/Action';


// import {completeTodo} from '.../redux/action';

const TodoList =()=>{
    const state = useSelector((state)=>({...state.todos}));
    let dispatch = useDispatch();

const create = (newTodo)=>{
    dispatch(addTodo(newTodo));
};
const update=(id,updateTask)=>{
dispatch(updateTodo({id , updateTask}));

};
    return (
        <div className='TodoList'>
            <h1>Todo App</h1>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className ="todo=list">
                    {state.todos && 
                    state.todos.map((todo)=>{
                        return(
                            <CSSTransition key={todo.id} classNames ="todo">
                                <Todo
                                key={todo.id}
                                id={todo.id}
                                task ={todo.task}
                                completed={todo.completed}
                                toggleTodo={()=>dispatch(completeTodo(todo))}
                                removeTodo={()=>dispatch(removeTodo(todo))}
                                updateTodo={update}

                                />
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </ul>
            
        </div>
    );
};

export default TodoList
