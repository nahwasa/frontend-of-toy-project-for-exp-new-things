import React, {useState} from 'react';

function Todo({item}) {
    const [state, setState] = useState(item);

    return (
        <div className={"Todo"}>
            <input
                type={"checkbox"}
                id={state.id}
                name={state.name}
                // checked={state.done}
                defaultChecked={state.done}
            />
            <label id={state.id}>{state.title}</label>
        </div>
    );
}

export default Todo;