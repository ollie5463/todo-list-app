import React, { createContext, useEffect, useReducer } from 'react';
import Axios from 'axios';

export const TodoListContext = createContext([{}, () => { }]);

const reducer = (state, action) => {
    if (action.type === 'setTodoListItems') {
        return { todoListItems: [...state.todoListItems, ...action.payload] }
    }
}

export const TodoListProvider = (props) => {
    const [state, setState] = useReducer(reducer, {
        todoListItems: []
    });
      useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('/todoListData.json');
            setState({ type: 'setTodoListItems', payload: result.data.items })
        }
        fetchData();
  }, []);
    return (
        <TodoListContext.Provider value={[ state, setState ]}
        {...props}>
        </TodoListContext.Provider>
    )
}

