import React, { Component } from 'react';

class UserOutput extends Component {

    render() {
        return (
            <div>
                <p>I am working in {this.props.company}</p>
                <button onClick={this.props.click}>Change to DTCC</button>
                <p>My total experience is {this.props.years} years</p>
            </div>
        )
    }

}

export default UserOutput;