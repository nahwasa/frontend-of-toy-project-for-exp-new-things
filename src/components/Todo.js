import React, {useState} from 'react';
import {Checkbox, InputBase, ListItem, ListItemText} from "@material-ui/core";

export const Todo = ({item}) => {
    const [state, setState] = useState(item);

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
        </ListItem>
    );
}