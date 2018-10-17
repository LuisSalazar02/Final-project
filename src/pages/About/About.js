import React, { Component } from "react";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12" />
            <h2 className="title">About</h2>
            <p>
              Mallory Furniture is a local vintage furniture retailer with a
              constantly changing selection. Their showroom has limited floor
              space so they initially wanted to build an ecommerce website to
              show all their inventory, including items in the warehouse.
            </p>
            <p>
              They have obtained mockups for the site's design, and they have
              recently built a back-end API that contains their current
              listings. They now need to implement the front-end functionality.
              As a forward-looking company, they are interested in building the
              front-end in React to keep their views orderly and easily
              modifiable.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
