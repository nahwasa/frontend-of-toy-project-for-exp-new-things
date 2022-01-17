import React, {useState} from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

export const Todo = ({item, del}) => {
    const [todoItem, setTodoItem] = useState(item);

    let onDeleteClicked = () => {
        del(todoItem);
    }

    return (
        <ListItem>
            <Checkbox
                defaultChecked={todoItem.done}
            />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked"}}
                    type={"text"}
                    id={todoItem.id}
                    name={todoItem.id}
                    value={todoItem.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton
                    aria-label={"Delete Todo"}
                    onClick={onDeleteClicked}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}