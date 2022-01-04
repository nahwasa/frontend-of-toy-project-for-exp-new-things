import React from 'react';

function Test({name}) {
    return (
        <div>
            name (function) :  {name}
        </div>
    )
}

class TestWithClass extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        return (
            <div>
                name (class) : {this.name}
            </div>
        );
    }
}

const TestWithArrow = ({name}) => {
    return (
        <div>
            name (arrow) : {name}
        </div>
    )
}

export default Test;