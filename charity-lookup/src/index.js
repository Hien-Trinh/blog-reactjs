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
            return <p className="">Nothing yet</p>
        }

        return (
            <div className="text-center">
                <ul className="">
                    {this.state.charity_list.map(charity => (
                        <li key={charity.id}>{charity.title}</li>
                    ))}
                </ul>
            </div>
        )
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="">
                <form className="flex items-center justify-center pt-80">
                    <input type="text" placeholder="Search" className="w-5/12 h-11 border-[1px] border-gray-400 rounded-l-full shadow-2xl" onChange={this.onSearchChange}/>
                    <button className="font-bold bg-gray-400 h-11 rounded-r-full shadow-2xl" onClick={this.getCharity} disabled={this.state.isFetching}>
                        Click me
                    </button>
                </form>

                <this.listElement />
                <p className="flex text-center">isFetching:{this.state.isFetching.toString()}</p>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);