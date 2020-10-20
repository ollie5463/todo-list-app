import React from 'react';
import { ListItem } from '@material-ui/core';

function TodoListItem(props) {
    return (
        <ListItem
            onClick={() => props.onClick(props.item)}
            className="list-item"
            href="#simple-list">

            {props.item}

        </ListItem>
    )
}

export default TodoListItem;