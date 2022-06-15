import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            charity_list: null,
            isFetching: false
        }

        this.getCharity = this.getCharity.bind(this)
        this.fetchResult = this.fetchResult.bind(this)
        this.listElement = this.listElement.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    fetchResult(dir) {
        this.setState({ isFetching: true })
        fetch(dir, {
            method:'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                charity_list: json.search.response.projects.project,
                isFetching: false
            })
        })
    }

    getCharity() {
        this.fetchResult(`https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=${this.state.searchTerm}`)
    }

    listElement() {
        if (this.state.charity_list == null) {
            return <p className="text-center">Nothing yet</p>
        }

        return (
            <ul className="text-center">
                <li>{this.state.charity_list[0].title}</li>
                <li>{this.state.charity_list[1].title}</li>
                <li>{this.state.charity_list[2].title}</li>
                <li>{this.state.charity_list[3].title}</li>
                <li>{this.state.charity_list[4].title}</li>
            </ul>
        )
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
        console.log(event.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <form className="text-center flex justify-center content-center">
                    <input type="text" placeholder="Search" className="w-5/12 h-11 border-2 border-black" onChange={this.onSearchChange}/>
                    <button className="font-bold bg-slate-700" onClick={this.getCharity} disabled={this.state.isFetching}>
                        Click me
                    </button>
                </form>
                
                <br></br>

                <this.listElement />

                <br></br>

                <p className="text-center">isFetching:{this.state.isFetching.toString()}</p>
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);