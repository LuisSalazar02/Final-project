import React, { Component } from "react";

import "./CartElement.css";

export default class CartElement extends Component {
  handleErase = () => {
    this.props.onErase(this.props.data.id);
  };

  render() {
    return (
      <div className="CartElement">
        <div onClick={this.handleErase} className="erasing-button">
          <button className="btn btn-erase">
            <i className="fa fa-times fa-2x" />
          </button>
        </div>
        <div className="itemImage">
          <img src={this.props.data.image} />
        </div>
        <div className="itemName">
          <span>{this.props.data.item}</span>
        </div>
        <div className="itemPrice">
          <span>${this.props.data.price}</span>
        </div>
      </div>
    );
  }
}
