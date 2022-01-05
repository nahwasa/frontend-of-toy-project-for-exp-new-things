import logo from '../logo.svg';
import '../css/App.css';
import {Todo} from './Todo';
import {List, Paper} from "@material-ui/core";
import {AddTodo} from "./AddTodo";
import {useState} from "react";


const App = () => {

    const [state, setState] = useState({
        items : []
    });

    let add = (title) => {
        let thisItems = state.items;
        let tmp = {
            id: "ID-" + thisItems.length,
            done: false,
            title: title
        };
        thisItems.push(tmp);
        setState({items: thisItems});
    };

    let del = (item) => {
        let thisItems = state.items;
        let newItems = thisItems.filter(e => e.id !== item.id);
        setState({items: newItems});
    };

    let todoItems = state.items.length > 0 && (
        <Paper style={{ margin:16 }}>
            <List>
                {state.items.map((item, idx) => (
                    <Todo item={item} key={item.id} del={del} />
                ))}
            </List>
        </Paper>
    );

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <AddTodo add={add}/>
                <div className={"TodoList"}>
                    {todoItems}
                </div>

            </header>
        </div>
    );
}

export default App;
