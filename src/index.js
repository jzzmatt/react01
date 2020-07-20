import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component

const App = () => {
    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor: 'blue', color: 'white'}}>submit</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);