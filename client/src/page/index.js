import React, { Component } from "react";
import "./index.css";
import { SaveAppoinment } from "../components";
import { ViewAppoinment } from "../components";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1
    };
  }

  componentDidMount() {
    this.setState({
      show: true
    });
  }

  clickHandler(id, event) {
    this.setState({
      id
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="page-container">
        <div className="left-panel">
          <ul>
            <li>
              <a href="#" onClick={this.clickHandler.bind(this, 1)}>
                Save Appoinment
              </a>
            </li>
            <li>
              <a href="#" onClick={this.clickHandler.bind(this, 2)}>
                View Appoinment
              </a>
            </li>
          </ul>
        </div>
        <div className="right-panel">
          {this.state.id === 1 ? <SaveAppoinment /> : <ViewAppoinment />}
        </div>
      </div>
    );
  }
}

export default Menu;
