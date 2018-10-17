import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header data={this.props.data} onDelete={this.props.onDeleteItem} />
        <main>
          <div>{this.props.children}</div>
        </main>
        <Footer />
      </div>
    );
  }
}
