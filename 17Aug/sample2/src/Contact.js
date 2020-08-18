import React from 'react';
import './App.css';

function Contact(props) {
    return (
        <div className="Contact">
            <h2> Contact</h2>
            <h3>{props.address}</h3>
            <h3>{props.pin}</h3>

        </div>
    );
}

export default Contact; 
