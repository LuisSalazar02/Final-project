import React, { Component } from "react";

import bedroom from "../../images/category-bedroom.png";
import desks from "../../images/category-desks.png";
import misc from "../../images/category-miscellaneous.png";
import seating from "../../images/category-seating.png";
import storage from "../../images/category-storage.png";
import tables from "../../images/category-tables.png";
import "./Head.css";

export default class Head extends Component {
  render() {
    return (
      <div>
        {this.props.category === "seating" ? (
          <React.Fragment>
            <div className="categoryImage">
              <img src={seating} />
            </div>
            <div className="section-heading">
              <h2 className="title">Seating</h2>
              <p className="subtitle">All Seating products</p>
            </div>
          </React.Fragment>
        ) : this.props.category === "tables" ? (
          <React.Fragment>
            <div className="categoryImage">
              <img src={tables} />
            </div>
            <div className="section-heading">
              <h2 className="title">Tables</h2>
              <p className="subtitle">All Tables products</p>
            </div>
          </React.Fragment>
        ) : this.props.category === "desks" ? (
          <React.Fragment>
            <div className="categoryImage">
              <img src={desks} />
            </div>
            <div className="section-heading">
              <h2 className="title">Desks</h2>
              <p className="subtitle">All Desks products</p>
            </div>
          </React.Fragment>
        ) : this.props.category === "storage" ? (
          <React.Fragment>
            <div className="categoryImage">
              <img src={storage} />
            </div>
            <div className="section-heading">
              <h2 className="title">Storage</h2>
              <p className="subtitle">All Storage products</p>
            </div>
          </React.Fragment>
        ) : this.props.category === "bedroom" ? (
          <React.Fragment>
            <div className="categoryImage">
              <img src={bedroom} />
            </div>
            <div className="section-heading">
              <h2 className="title">Bedroom</h2>
              <p className="subtitle">All Bedroom products</p>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="categoryImage">
              <img src={misc} />
            </div>
            <div className="section-heading">
              <h2 className="title">Miscellaneous</h2>
              <p className="subtitle">All Miscellaneous products</p>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
