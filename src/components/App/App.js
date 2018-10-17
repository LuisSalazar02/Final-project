import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Terms from "../../pages/Terms";
import AllProducts from "../../pages/AllProducts";
import ProductInfo from "../../pages/ProductInfo";
import Category from "../../pages/Category";

class App extends Component {
  state = {
    cartItems: {}
  };

  handleAdd = query => {
    const nextCartItems = [...this.state.cartItems, query];

    this.setState({
      cartItems: nextCartItems
    });
  };

  handleDelete = id => {
    const nextCartItems = this.state.cartItems.filter(
      element => element.id !== id
    );

    this.setState({
      cartItems: nextCartItems
    });
  };

  render() {
    return (
      <div>
        <Layout data={this.state.cartItems} onDeleteItem={this.handleDelete}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/all-products" component={AllProducts} />
            <Route
              exact
              path="/product/:productId"
              component={props => (
                <ProductInfo {...props} onAddToCart={this.handleAdd} />
              )}
            />
            <Route exact path="/category/:categoryType" component={Category} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
