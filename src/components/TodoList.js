import React, { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import Axios from 'axios';

function TodoList(props) {
    const [textInInputBox, setTextInInputBox] = useState('');

    // todoListItems = props.todoListItems
    // setTodoListItems(props.todoListItems)
    // useEffect(() => {
    //     if (props.todoListItems) {
    //         setTodoListItems(props.todoListItems)
    //     }
    // }, []);
    // const addTodoListTask = () => {
    //     setTodoListItems([...todoListItems, textInInputBox]);
    //     setTextInInputBox('');
    // }
        return (
        <div>
        <form className="form">
            <label>
                Task: 
                <input className="input" type="text" value={textInInputBox} onChange={(event) => setTextInInputBox(event.target.value)}></input>
            </label>
            <Button type="button" value="Submit" variant="contained" color="primary">Submit</Button>
        </form>
        <ul className="todoList">
            {props.todoListItems.map((item, index) => 
                <div key={index}>
                <Link className='link' key={index} to={`/${item}`}>{item}</Link>
                </div>
            )}
        </ul>
        </div>
                );
            }
            // <TodoListItem key={index} item={item} onClick={props.onClick}> <Link key={`link: ${index}`} to={`/${item}`}>{item}</Link></TodoListItem>
            // <TodoListItem key={index} item={item} onClick={props.onClick}><a href="/task1"></a></TodoListItem>
    
    
    export default TodoList;