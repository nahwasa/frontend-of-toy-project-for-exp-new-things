import React from 'react';
import Todo2 from './Todo2';

function Todo() {
    return (
        <div className={"Todo"}>
            <input type={"checkbox"} id={"todo0"} name={"todo0"} value={"todo0"}/>
            <label htmlFor={"todo0"}>Make Todo Component</label>
            <div>
                <Todo2/>
            </div>
        </div>
    );
}



class TodoClass extends React.Component {
    render() {
        return (
            <div className={"Todo"}>
                <input type={"checkbox"} id={"todo0"} name={"todo0"} value={"todo0"}/>
                <label for={"todo0"}>Make Todo Component</label>
            </div>
        );
    }
}

export default Todo;