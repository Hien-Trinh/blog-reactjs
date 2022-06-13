import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            charity_list: null
        }
    }

    getCharity() {
        this.setState({ charity_list: this.state.charity_list + 1 })
    }

    render() {
        return (
            <React.Fragment>
                <div class="text-center">
                    <button class="font-bold bg-slate-700" onClick={this.getCharity()}>
                        Click me
                    </button>
                </div>
                
                <br></br>
                <ul>
                    <li></li>
                </ul>
                <p>
                    {this.state.value}
                </p>
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);