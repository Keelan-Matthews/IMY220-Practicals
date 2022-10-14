import React from "react";
import User from "./User.jsx";

export default class UserList extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.users.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
        );
    }
}