import React, {useState} from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

export const Todo = ({item, update, del}) => {
    const [todoItem, setTodoItem] = useState(item);
    const [readOnly, setReadOnly] = useState(true);

    let onDeleteClicked = () => {
        del(todoItem);
    }

    let onTitleClicked = () => {
        setReadOnly(false);
    }

    let onEnterKeyPressed = e => {
        if (e.key === 'Enter') {
            setReadOnly(true);
        }
    }

    let onTitleChanged = e => {
        let cur = Object.assign({}, todoItem);
        cur.title = e.target.value;
        setTodoItem(cur);
        update(cur);
    }

    let onCheckboxChanged = e => {
        let cur = Object.assign({}, todoItem);
        cur.done = !cur.done;
        setTodoItem(cur);
        update(cur);
    }

    return (
        <ListItem>
            <Checkbox
                checked={todoItem.done} onChange={onCheckboxChanged}
            />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label":"naked",
                        readOnly: readOnly
                    }}
                    type={"text"}
                    id={todoItem.id}
                    name={todoItem.id}
                    value={todoItem.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={onTitleClicked}
                    onKeyPress={onEnterKeyPressed}
                    onChange={onTitleChanged}
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