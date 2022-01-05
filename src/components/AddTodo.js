import React, {useState} from 'react';
import {Button, Grid, Paper, TextField} from "@material-ui/core";

export const AddTodo = ({add}) => {
    const [state, setState] = useState({title: ""});

    let onInputChange = (e) => {
        setState({title: e.target.value});
    }

    let onButtonClick = () => {
        console.log(state.title);
        add(state.title);
        setState({title: ""});
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
                        value={state.title}
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