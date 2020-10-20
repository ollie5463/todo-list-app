import React from 'react';

function TodoListEntry({ match }) {
    const name = match.params.name;
    console.log('name: ', name)
    return (
    <div>
        <h1>todoListItem: {name}</h1>
    </div>
    )
}

export default TodoListEntry;