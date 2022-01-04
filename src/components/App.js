import logo from '../logo.svg';
import '../css/App.css';
import Todo from './Todo';


function App() {
    let state = {
        items : [
            {id: "0", title: "Hello World 1", done: true},
            {id: "1", title: "Hello World 2", done: false}
        ]
    }

    let todoItems = state.items.map((item, idx) => (
       <Todo item={item} key={item.id} />
    ));

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
