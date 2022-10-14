import React from "react";

export default class User extends React.Component {
    render() {
        return (
            <div className="col-6">
                <div className="card">
                    <div className="card-header">
                        <p>{this.props.user.username}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text"><span className="fw-bold">Name: </span>{this.props.user.name}</p>
                        <p className="card-text"><span className="fw-bold">Surname: </span>{this.props.user.surname}</p>
                        <p className="card-text"><span className="fw-bold">Age: </span>{this.props.user.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}