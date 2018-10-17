import React, { Component } from "react";

import "./Product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.product.imageLink} />
        <p>
          {this.props.product.item}
          <br /> ${this.props.product.price}
        </p>
      </div>
    );
  }
}
