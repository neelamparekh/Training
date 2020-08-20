
import React, { Component } from "react";

class Users extends Component {
    render() {
        const { user } = this.props

        return (
            <div>
                <h3> User Details</h3>
                <table>
                    <tr>
                        <th>Name </th>
                        <th>ID</th>
                        <th>Location</th>
                    </tr>
                    <tr>
                        <td>{user.name} </td>
                        <td>{user.id}</td>
                        <td>{user.location}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Users;



