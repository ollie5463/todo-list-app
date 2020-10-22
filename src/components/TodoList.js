import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TodoListContext } from '../providers/TodoListContext';

function TodoList(props) {
    const [textInInputBox, setTextInInputBox] = useState('');

    const [state, setState] = useContext(TodoListContext)
    return (
        <div>
        <form className="form">
            <label>
                Task: 
                <input className="input" type="text" value={textInInputBox} onChange={(event) => setTextInInputBox(event.target.value)}></input>
            </label>
                <Button type="button" value="Submit" variant="contained" color="primary" onClick={() => {
                    setState({ type: 'setTodoListItems', payload: [textInInputBox] })
                    setTextInInputBox('')
                }}>Submit</Button>
        </form>
            <ul className="todoList">
                {
                    state.todoListItems.map((item, index) =>
                        <div key={index}>
                            <Link className='link' key={index} to={`/${item}`}>{item}</Link>
                        </div>
                    )
                }
        </ul>
        </div>
        );
    }
    
    
    export default TodoList;