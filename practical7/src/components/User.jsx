import React from "react";

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showBody: false};
        this.toggleBody = this.toggleBody.bind(this);
    }

    toggleBody() {
        this.setState({showBody: !this.state.showBody});
    }

    render() {
        return (
            <div className="col-6">
                <div className="card" onClick={this.toggleBody}>
                    <div className="card-header">
                        {this.props.user.username}
                    </div>
                    <div className={`card-body ${this.state.showBody ? '' : 'd-none'}`}>
                        <p className="card-text"><span className="fw-bold">Name: </span>{this.props.user.name}</p>
                        <p className="card-text"><span className="fw-bold">Surname: </span>{this.props.user.surname}</p>
                        <p className="card-text"><span className="fw-bold">Age: </span>{this.props.user.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}