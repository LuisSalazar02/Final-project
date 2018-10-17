import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as api from "../../lib/api";
import "./Home.css";
import Landing from "../../images/landing-splash-bg.png";
import Product from "../../components/Product";

export default class Home extends Component {
  state = {
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

  render() {
    const styles = {
      backgroundImage: `url(${Landing})`
    };

    const { loading, error, products } = this.state;

    let featured;

    if (loading === false) {
      featured = products.filter(data => {
        if (data.featured === true) {
          return data;
        }
      });
    }

    return (
      <div>
        <div className="hero" style={styles}>
          <h1 className="title">Mallory Furniture</h1>
          <p>
            Your furniture is old.
            <br /> Ours is older.
          </p>
        </div>
        <div className="section-heading">
          <h2 className="title">Featured Products</h2>
          <p className="subtitle">Check out some of our favorite listings</p>
        </div>
        <div>
          {loading && (
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
          )}
          {!loading &&
            products && (
              <div className="list">
                {featured.map(product => (
                  <Link to={`/product/${product._id}`}>
                    <Product key={product._id} product={product} />
                  </Link>
                ))}
              </div>
            )}
          {error && <p>{error.message}</p>}
        </div>
        <div className="allProducts">
          <Link to="/all-products">
            <div className="btn btn-all">
              <p>All Products</p>
            </div>
          </Link>
        </div>
        <div className="section-heading">
          <h2 className="title">Browse by Categories</h2>
          <p className="subtitle">Explore by furniture type.</p>
        </div>
        <div className="categories">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-9">
                <Link to="/category/seating">
                  <div className="btn btn-blue">
                    <p>Seating</p>
                  </div>
                </Link>
                <Link to="/category/tables">
                  <div className="btn btn-blue">
                    <p>Tables</p>
                  </div>
                </Link>
                <Link to="/category/desks">
                  <div className="btn btn-blue">
                    <p>Desks</p>
                  </div>
                </Link>
                <Link to="/category/bedroom">
                  <div className="btn btn-blue">
                    <p>Bedroom</p>
                  </div>
                </Link>
                <Link to="/category/storage">
                  <div className="btn btn-blue">
                    <p>Storage</p>
                  </div>
                </Link>
                <Link to="/category/miscellaneous">
                  <div className="btn btn-blue">
                    <p>Misc</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
