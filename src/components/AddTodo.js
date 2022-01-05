import React from 'react';
import {Button, Grid, Paper, TextField} from "@material-ui/core";

function AddTodo() {
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField plcaholder={"Add Todo here"} fullWidth />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth color={"secondary"} variant={"outlined"}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;