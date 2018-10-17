import React, { Component } from "react";

import * as api from "../../lib/api";
import "./ProductInfo.css";

export default class ProductInfo extends Component {
  state = {
    loading: true,
    error: null,
    product: null
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = () => {
    api
      .getProductById(this.props.match.params.productId)
      .then(product => {
        this.setState({
          loading: false,
          product
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  handleAddItem = () => {
    const element = {
      id: this.state.product._id,
      image: this.state.product.imageLink,
      item: this.state.product.item,
      price: this.state.product.price
    };

    this.props.onAddToCart(element);
  };

  render() {
    const { loading, error, product } = this.state;
    return (
      <div>
        {loading && (
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        )}
        {!loading &&
          product && (
            <React.Fragment>
              <div className="productImage">
                <img src={product.imageLink} />
              </div>
              <div className="infoCard">
                <div>
                  <h3>{product.item}</h3>
                </div>
                <div className="price">
                  <p>${product.price}</p>
                  <hr className="contentBreak" />
                </div>
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <u className="gray">Condition</u>
                        <p className="gray">{product.condition}</p>
                      </div>
                      <div className="col-6 col-md-5">
                        <u className="gray">Measurements</u>
                        <p className="gray">
                          W:
                          {product.width} L:
                          {product.length} H:
                          {product.height}
                        </p>
                      </div>
                      <div className="col-6 col-md-4">
                        <button
                          onClick={this.handleAddItem}
                          className="btn btn-add"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}
