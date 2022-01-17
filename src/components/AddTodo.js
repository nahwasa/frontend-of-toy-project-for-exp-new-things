import React, {useState} from 'react';
import {Button, Grid, Paper, TextField} from "@material-ui/core";

export const AddTodo = ({add}) => {
    const EMPTY_STR = "";
    const [title, setTitle] = useState(EMPTY_STR);

    let onInputChange = (e) => {
        setTitle(e.target.value);
    }

    let onButtonClick = () => {
        add(title);
        setTitle(EMPTY_STR);
    }

    let onEnterKeyPressed = (e) => {
        if (e.key === 'Enter')
            onButtonClick();
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        plcaholder="Add Todo here"
                        onChange={onInputChange}
                        onKeyPress={onEnterKeyPressed}
                        fullWidth
                        value={title}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        color={"secondary"}
                        variant={"outlined"}
                        onClick={onButtonClick}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}