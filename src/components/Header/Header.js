import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import Logo from "../../images/mf-logo-white.svg";
import CartElement from "../../components/CartElement";

class Header extends Component {
  state = {
    show: false
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;

    return (
      <div className="Header">
        {console.log(this.props.data)}
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/about" className="company">
                About
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/terms" className="company">
                Terms + Conditions
              </Link>
            </li>
            <li className="list-inline-item">
              <span>|</span>
            </li>
            <li className="list-inline-item">
              <Link to="/all-products" className="products">
                All
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/seating" className="products">
                Seating
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/tables" className="products">
                Tables
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/desks" className="products">
                Desks
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/storage" className="products">
                Storage
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/bedroom" className="products">
                Bedroom
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/category/miscellaneous" className="products">
                Misc
              </Link>
            </li>
            <li className="list-inline-item">
              <span>|</span>
            </li>
            <li className="list-inline-item">
              <div onClick={this.handleShow} className="btn-cart">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/512px-Shopping_cart_font_awesome.svg.png" />
              </div>
            </li>
            {show && (
              <div className="cart">
                <div className="cartTitle">
                  <div className="title-button">
                    <button onClick={this.handleClose} className="btn btn-exit">
                      <i className="fa fa-times fa-2x" />
                    </button>
                  </div>
                  <div className="cartName">
                    <h2>Your cart</h2>
                  </div>
                </div>
                <div className="cartItemHolder">
                  {this.props.data.length > 0 && (
                    <React.Fragment>
                      {this.props.data.map(item => {
                        return (
                          <CartElement
                            key={item.id}
                            data={item}
                            onErase={this.props.onDelete}
                          />
                        );
                      })}
                    </React.Fragment>
                  )}
                </div>
              </div>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
