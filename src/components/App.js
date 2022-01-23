import logo from '../logo.svg';
import '../css/App.css';
import axios from "axios";
import {List, Paper} from "@material-ui/core";
import {useState, useEffect} from "react";

import {Todo} from './Todo';
import {AddTodo} from "./AddTodo";

const App = () => {
    // state
    const [todoItems, setTodoItems] = useState({
        items : []
    });
    const [seq, setSeq] = useState(0);

    // effect
    useEffect(() => {
        (async () => {
            let response = await axios.get("http://localhost:8080/todo");
            setTodoItems({items: response.data.data});
        })();
    }, []);


    let add = title => {
        let cur = Object.assign({}, todoItems);

        let tmp = {
            id: "ID-" + seq,
            done: false,
            title: title
        };
        cur.items.push(tmp);

        setSeq(seq+1);
        setTodoItems(cur);
    };

    let del = item => {
        let cur = Object.assign({}, todoItems);
        cur.items = cur.items.filter(e=>e.id != item.id);
        setTodoItems(cur);
    };

    let todoList = todoItems.items.length > 0 &&
        <Paper style={{ margin:16 }}>
            <List>
                {todoItems.items.map(value =>
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