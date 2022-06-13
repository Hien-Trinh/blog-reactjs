import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ value: this.state.value + 1 })}>
                    Click me
                </button>
                <p>
                    {this.state.value}
                </p>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);