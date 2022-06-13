import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            charity_list: null
        }

        this.getCharity = this.getCharity.bind(this)
        this.fetchResult = this.fetchResult.bind(this)
        this.listElement = this.listElement.bind(this)
    }

    fetchResult(dir) {
        fetch(dir, {
            method:'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({ charity_list: json })
        })
    }

    getCharity() {
        this.fetchResult('https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=pakistan+flood')
    }

    listElement() {
        if (this.state.charity_list == null) {
            return <p>Nothing yet</p>
        }
        return (
            <div>{this.state.charity_list.search.response.projects.project[0].title}</div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <button className="font-bold bg-slate-700" onClick={this.getCharity}>
                        Click me
                    </button>
                </div>
                
                <br></br>
                <this.listElement />
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);