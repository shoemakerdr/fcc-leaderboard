import React, { Component } from 'react';
import './App.css';
import Table from './Table'

const intialState = [
    {
        username: '',
        img: '',
        recent: '',
        alltime: ''
    }
]

class App extends Component {
    constructor () {
        super()
        this.getData = this.getData.bind(this)
        this.sortRecent = this.sortRecent.bind(this)
        this.sortAllTime = this.sortAllTime.bind(this)
        this.recent = ''
        this.alltime = ''
        this.state = {
            fetchData: intialState,
            sort: ''
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData () {
        const recent = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(data => data.json())
            .then(data => {
                this.setState({fetchData:data})
                this.recent = data
            })
        const alltime = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(data => data.json())
            .then(data => {
                this.alltime = data
            })
        Promise.all([recent, alltime])
    }

    sortRecent () {
        this.setState({
            fetchData: this.recent,
            sort: 'recent'
        })
    }

    sortAllTime () {
        this.setState({
            fetchData: this.alltime,
            sort: 'alltime'
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>FreeCodeCamp Leaderboard</h2>
                </div>
                <Table
                    data={this.state.fetchData}
                    sort={this.state.sort}
                    sortRecent={this.sortRecent}
                    sortAllTime={this.sortAllTime}
                />
            </div>
        );
    }
}

export default App;
