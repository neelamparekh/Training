import React, { Component } from "react";
import api from "./Api";

// add Simple React snippets - from extensions

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: " ",
        };
    }

    getData = () => {
        api.getUsers("jayeshkattar") // this is a promise // console.log(api.getUsers("jayeshkattar"))
            .then((data) => {
                console.log(data);
                this.setState({
                    data: data.data, // to display the exact data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getData}>GET DATA</button>
            </div>
        );
    }
}

export default Users;