import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as api from "../../lib/api";
import Product from "../../components/Product";

export default class AllProducts extends Component {
  state = {
    type: "allItems",
    loading: true,
    error: null,
    products: null
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    api
      .getProducts()
      .then(products => {
        this.setState({
          loading: false,
          products
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error
        });
      });
  };

  allItems = () => {
    this.setState({
      type: "allItems"
    });
  };

  onSale = () => {
    this.setState({
      type: "onSale"
    });
  };

  render() {
    const { loading, error, products, type } = this.state;

    const productSelectedClass = "product-type--selected";

    let allItemsSelectedRenderedClass = "";
    let onSaleSelectedRenderedClass = "";

    let kind;

    if (loading === false) {
      kind = products.filter(data => {
        if (type === "allItems") {
          allItemsSelectedRenderedClass = productSelectedClass;
          return data;
        } else {
          onSaleSelectedRenderedClass = productSelectedClass;
          return data.onSale === true;
        }
      });
    }

    return (
      <div>
        <div className="section-heading">
          <h2 className="title">All Products</h2>
          <p className="subtitle">All available listings</p>
        </div>
        <div className="filterOptions">
          <span
            onClick={this.allItems}
            className={`product-type ${allItemsSelectedRenderedClass}`}
          >
            All Items
          </span>
          <span
            onClick={this.onSale}
            className={`product-type ${onSaleSelectedRenderedClass}`}
          >
            On Sale
          </span>
        </div>
        <div className="counter">
          {!loading && <span className="number">{kind.length}</span>}
          <span className="showing">items showing</span>
        </div>
        <div>
          {loading && (
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
          )}
          {!loading &&
            products && (
              <div className="list">
                {kind.map(product => (
                  <Link to={`/product/${product._id}`}>
                    <Product key={product._id} product={product} />
                  </Link>
                ))}
              </div>
            )}
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}
