import React, { Component } from 'react';

var data; 

export default class Connect extends Component {
    
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:8080/api")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }));
            data = this.state.apiResponse;
    }
    
    componentWillMount() {
        this.callAPI();
    }
  render() {
      var x = [1, 2, 3];
    return <div>
        <ul>
        {x.map((x1, idx) => (
            <li key={idx}>{(this.state.apiResponse.b)}</li>
        ))}
        </ul>
    </div>;
  }
}
