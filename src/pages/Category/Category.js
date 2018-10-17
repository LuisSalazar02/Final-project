import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as api from "../../lib/api";
import Product from "../../components/Product";
import Head from "../../components/Head";

export default class Category extends Component {
  state = {
    type: "allItems",
    loading: true,
    error: null,
    products: null
  };

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryType !==
      prevProps.match.params.categoryType
    ) {
      this.loadProducts();
    }
  }

  loadProducts = () => {
    this.setState({
      loading: true,
      error: null
    });

    api
      .getCategory(this.props.match.params.categoryType)
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
        <Head category={this.props.match.params.categoryType} />
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
