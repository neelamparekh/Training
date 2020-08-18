import React, { Component } from "react"; // version 16 - Class and Functions .. ( >16.8)
import List from "./List";


// CLASS Component

class Home extends Component {
    //Class component = Container Component -> Responsible for managing data

    constructor(props) {
        super(props); // Prop is a keyword (props is an Object) which takes all the parameters
        this.state = {
            //State is an Object - Everything is managed by state

            // State -> applicable only for class components . (After 16.8 also in functional components)

            data: " ",
            name: " ",
            clsName: " ",
            stdName: " ",
            students: ['Harshith', 'Nilam', 'Ranjani', 'Jayesh'], // To display this in Home, we create Component List.js
            department: ['IT', "Management", "HR"],
        };
    }
    // props -> If you need to pass data from parent component to child you can pass 
    //             only through props.

    // In React, data flows only in One direction. Parent -> Child (One Way Communication)

    // onChang = (e) => {
    //     this.setState({
    //         data: e.target.value,
    //     });
    // };


    //This is a Function that is being Called
    captureName = (event) => {
        //document.getElementById('stdName' ) => <input type = "text"/>
        this.setState({
            stdName: event.target.value, // enetred in stdName: " "
        });

        // console.log("Captured!");
        // console.log(event); // object
        // console.log(event.target); // will give particular value // 
        // console.log(event.target.value); // This will give value entered in textbox
    };

    // addStudent Function is being called ONCLICK
    addStudent = () => {
        let tempData = this.state.students; // Make a copy of the array which is in tempData
        tempData.push(this.state.stdName); // Added the Value/ new student Name into tempData
        this.setState({
            students: tempData, // Replacing the tempData to studnets// Modified the tempData
        });
    } // Complete render method will be called if we do {this.setState()}

    render() {
        return ( // We will import List here
            <div>

                {/* {console.log("Rendered!")} */}

                <label>Enter Student Name : </label>
                <input type="text" onChange={this.captureName} />
                <button onClick={this.addStudent}> ADD STUDENT</button>

                <List data={this.state.students} />
                <List data={this.state.department} />
            </div>  // we can only have one element to return i.e <div></div>
        );
    }
}

export default Home;