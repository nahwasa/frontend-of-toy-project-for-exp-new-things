import logo from '../logo.svg';
import '../css/App.css';
import Todo from './Todo';
import {List, Paper} from "@material-ui/core";


function App() {
    let state = {
        items : [
            {id: "0", title: "Hello World 1", done: true},
            {id: "1", title: "Hello World 2", done: false}
        ]
    }

    var todoItems = state.items.length > 0 && (
        <Paper style={{ margin:16 }}>
            <List>
                {state.items.map((item, idx) => (
                    <Todo item={item} key={item.id} />
                ))}
            </List>
        </Paper>    );

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                {todoItems}

            </header>
        </div>
    );
}

export default App;
