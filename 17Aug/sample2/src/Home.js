import React, { Component } from "react";
import Contact from "./Contact";
import Dashboard from "./Dashboard";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: " ",
        };
    }
    onChang = (e) => {
        this.setState({
            data: e.target.value,
        });
    };

    render() {
        return (
            <div>

                <input type="text" onChange={this.onChang} />
                <h3>{this.state.data}</h3>

                <h1>{this.props.nam}</h1>
                <Contact address={"220 Littleton Road"} pin={"07055"} />
                <Dashboard />

            </div>
        );
    }
}

export default Home;