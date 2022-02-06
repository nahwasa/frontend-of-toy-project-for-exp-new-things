import logo from '../logo.svg';
import '../css/App.css';
import {AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {call, logout} from "../service/ApiService";

import {Todo} from './Todo';
import {AddTodo} from "./AddTodo";

const App = () => {
    // state
    const [todoItems, setTodoItems] = useState({
        data : []
    });
    const [seq, setSeq] = useState(0);

    // effect
    useEffect(() => {
        (async () => {
            let response = await call("/todo", "GET", null);
            setTodoItems(response.data);
        })();
    }, []);


    let add = title => {
        (async () => {
            let response = await call("/todo", "POST", {title: title});
            setTodoItems(response.data);
            setSeq(seq+1);
        })();
    };

    let update = item => {
        (async () => {
            let response = await call("/todo", "PUT", item);
            setTodoItems(response.data);
        })();
    };

    let del = item => {
        (async () => {
            let response = await call("/todo", "DELETE", item);
            setTodoItems(response.data);
        })();
    };

    let todoList = todoItems.data.length > 0 &&
        <Paper style={{ margin:16 }}>
            <List>
                {todoItems.data.map(value =>
                    <Todo item={value} key={value.id} update={update} del={del} />
                )}
            </List>
        </Paper>
    ;

    let navigationBar = () => {
        return (
            <AppBar position={"static"}>
                <Toolbar>
                    <Grid justifyContent={"space-between"} container>
                        <Grid item>
                            <Typography variant={"h6"}>
                                오늘의 할일
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button color={"inherit"} onClick={logout}>
                                로그아웃
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }

    return (
        <div className="App">
            {navigationBar()}

            <img src={logo} className="App-logo" alt="logo"/>

            <Container maxWidth={"md"}>
                <AddTodo add={add}/>
                <div className={"TodoList"}>
                    {todoList}
                </div>
            </Container>
        </div>
    );
}

export default App;