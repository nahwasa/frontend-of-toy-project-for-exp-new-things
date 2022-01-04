import React, {useState} from 'react';

const TodoWithArrayType = (props) => {
    const [state, setState] = useState(props);

    return (
        <div className={"Todo"}>
            <input
                type={"checkbox"}
                id={this.state.id}
                name={this.state.id}
                checked={this.state.done}
            />
            <label id={this.state.id}>{this.state.title}</label>
        </div>
    );
}


export default TodoWithArrayType