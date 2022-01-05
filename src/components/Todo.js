import React, {useState} from 'react';
import {Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

export const Todo = ({item, del}) => {
    const [state, setState] = useState(item);

    let onDeleteClicked = () => {
        del(state);
    }

    return (
        <ListItem>
            <Checkbox
                defaultChecked={state.done}
                // checked={state.done}
            />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked"}}
                    type={"text"}
                    id={state.id}
                    name={state.id}
                    value={state.title}
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