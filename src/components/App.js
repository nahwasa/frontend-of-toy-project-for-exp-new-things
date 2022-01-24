import logo from '../logo.svg';
import '../css/App.css';
import {List, Paper} from "@material-ui/core";
import {useEffect, useState} from "react";
import {call} from "../service/AppService";

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
                    <Todo item={value} key={value.id} del={del} />
                )}
            </List>
        </Paper>
    ;


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <AddTodo add={add}/>
                <div className={"TodoList"}>
                    {todoList}
                </div>

            </header>
        </div>
    );
}

export default App;