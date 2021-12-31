import React from 'react';

function Todo2() {
    return (
        <div className={"Todo"}>
            <input type={"checkbox"} id={"todo0"} name={"todo0"} value={"todo0"}/>
            <label htmlFor={"todo0"}>Make Todo Component2222</label>
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

export default Todo2;