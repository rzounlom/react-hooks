import React, { Component } from "react";

export default class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      updated: false,
      mounted: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  // componentDidMount() {
  //   alert("Class Component Mounted");
  // }

  // componentDidUpdate() {
  //   this.state.name.length >= 7 && alert("Class Component Updated");
  // }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div className="input-group">
          {" "}
          <h3>Please enter you name</h3>
          <input
            type="text"
            placeholder="name"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </div>
        <div>{name && <h3>Hi {name}, it's very nice to meet you</h3>}</div>
      </div>
    );
  }
}
