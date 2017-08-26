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

const upArrow = '↑'
const downArrow = '↓'

class App extends Component {
    constructor () {
        super()
        this.getData = this.getData.bind(this)
        this.sortDescendingRecent = this.sortDescendingRecent.bind(this)
        this.sortAscendingRecent = this.sortAscendingRecent.bind(this)
        this.sortDescendingAllTime = this.sortDescendingAllTime.bind(this)
        this.sortAscendingAllTime = this.sortAscendingAllTime.bind(this)
        this.state = {
            fetchData: intialState,
            recent: {
                sort: false,
                arrow: '',
                type: ''
            },
            alltime: {
                sort: false,
                arrow: '',
                type: ''
            }
        }
    }

    componentDidMount () {
        this.getData()
    }

    getData () {
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(data => data.json())
            .then(data => this.setState({fetchData:data}))
    }

    sortDescendingRecent () {
        const recent = this.state.fetchData.sort((a,b) => b.recent - a.recent)
        this.setState({
            fetchData: recent,
            recent: {
                sort: true,
                arrow: downArrow,
                type: 'descend'
            },
            alltime: {
                sort: false,
                arrow: '',
                type: ''
            }
        })
    }

    sortAscendingRecent () {
        const recent = this.state.fetchData.sort((a,b) => a.recent - b.recent)
        this.setState({
            fetchData: recent,
            recent: {
                sort: true,
                arrow: upArrow,
                type: 'ascend'
            },
            alltime: {
                sort: false,
                arrow: '',
                type: ''
            }
        })
    }

    sortDescendingAllTime () {
        const alltime = this.state.fetchData.sort((a,b) => b.alltime - a.alltime)
        this.setState({
            fetchData: alltime,
            recent: {
                sort: false,
                arrow: '',
                type: ''
            },
            alltime: {
                sort: true,
                arrow: downArrow,
                type: 'descend'
            }
        })
    }

    sortAscendingAllTime () {
        const alltime = this.state.fetchData.sort((a,b) => a.alltime - b.alltime)
        this.setState({
            fetchData: alltime,
            recent: {
                sort: false,
                arrow: '',
                type: ''
            },
            alltime: {
                sort: true,
                arrow: upArrow,
                type: 'ascend'
            }
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
                    recent={this.state.recent}
                    alltime={this.state.alltime}
                    descendRecent={this.sortDescendingRecent}
                    ascentRecent={this.sortAscendingRecent}
                    descendAllTime={this.sortDescendingAllTime}
                    ascendAllTime={this.sortAscendingAllTime}
                />
            </div>
        );
    }
}

export default App;
