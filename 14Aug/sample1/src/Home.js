import React, { Component } from "react"; // version 16 - Class and Functions .. ( >16.8)
import List from "./List";
import Dashboard from "./Dashboard";


// CLASS Component

class Home extends Component {
    //Class component = Container Component -> Responsible for managing data

    constructor(props) {
        super(props); // Prop is a keyword (props is an Object) which takes all the parameters
        this.state = {
            // State -> applicable only for class components . (After 16.8 also in functional components)
            data: " ",
            students: ['Harshith', 'Nilam', 'Ranjani', 'Jayesh'],
            department: ['IT', "Management", "HR"],
        };
    }
    // props -> If you need to pass data from parent component to child you can pass 
    //             only through props.

    // In React, data flows only in One direction. Parent -> Child (One Way Communication)

    onChang = (e) => {
        this.setState({
            data: e.target.value,
        });
    };
    render() {
        return (
            <div>
                <input type="text" onChang={this.onChang} />
                <h3>{this.state.data}</h3>
                <List data={this.state.students} />
                <List data={this.state.employess} />
            </div>  // we can only have one element to return i.e <div></div>
        );
    }
}

export default Home;