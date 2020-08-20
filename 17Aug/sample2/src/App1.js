import React, { Component } from 'react';
import './App.css';
import Users from './Users';


class App1 extends Component {
    state = {
        user: {}
    }

    getUser = () => {
        const name = this.refs.name.value;
        fetch(`https://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: {
                        name: data.name,
                        location: data.location,
                        id: data.id,
                    }
                })
            })
    }

    render() {

        const { user } = this.state;

        return (
            <div className="App1">
                <h2>Display User Details</h2><br />
                <input type="text" placeholder="Enter UserName " ref="name" />
                <button onClick={this.getUser} > Submit </button> <br />
                <Users user={user} />
            </div>
        );
    }
}


export default App1;

