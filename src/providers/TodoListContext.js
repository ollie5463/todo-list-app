import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const TodoListContext = createContext([{}, ()=>{}]);

export const TodoListProvider = (props) => {
    const [state, setState] = useState({
        todoListItems: []
    });
      useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('/todoListData.json');
            setState({ todoListItems: result.data.items })
        }
        fetchData();
  }, []);
    return (
        <TodoListContext.Provider value={[ state, setState ]}
        {...props}>
        </TodoListContext.Provider>
    )
}

