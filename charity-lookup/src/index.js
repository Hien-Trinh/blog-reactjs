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
            const charity_list = json.search.response.projects.project
            this.setState({
                charity_list: charity_list,
                isFetching: false})
        })
    }

    getCharity(term) {
        this.fetchResult('https://api.globalgiving.org/api/public/services/search/projects?api_key=5daeb019-df53-43ea-a550-0621ec8787bf&q=pakistan+flood' + term)
    }

    listElement() {
        if (this.state.charity_list == null) {
            return <p className="text-center">Nothing yet</p>
        }
        return (
            <React.Fragment>
                <ul className="text-center">
                    <li>{this.state.charity_list[0].title}</li>
                    <li>{this.state.charity_list[1].title}</li>
                    <li>{this.state.charity_list[2].title}</li>
                    <li>{this.state.charity_list[3].title}</li>
                    <li>{this.state.charity_list[4].title}</li>
                </ul>
                <p>isFetching:{this.state.isFetching.toString()}</p>
            </React.Fragment>
        )
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
        this.getCharity(this.state.searchTerm)
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <form>
                        <input
                        type="text"
                        placeholder="Search"
                        onChange={this.onSearchChange}/>
                        <button
                            className="font-bold bg-slate-700"
                            onClick={this.getCharity}
                            disabled={this.state.isFetching}>
                            Click me
                        </button>
                    </form>
                </div>
                
                <br></br>
                <this.listElement />
            </React.Fragment>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);