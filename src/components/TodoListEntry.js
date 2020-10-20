import TodoListItem from "./TodoListItem";

import React from 'react';
import { useParams } from "react-router-dom";

function TodoListEntry({ match }) {
    const name = match.params.name;
    // let { todoListItem } = useParams();
    console.log('name: ', name)
    return (
    <div>
        <h1>todoListItem: {name}</h1>
    </div>
    )
}

export default TodoListEntry;