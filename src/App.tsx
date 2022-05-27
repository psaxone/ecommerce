import * as React from 'react';
import Header from './pages/common/header';
import Cart from './pages/cart-details';
import Checkout from './pages/checkout';
import ProductDetails from './pages/product-details';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/home';
import { ROUTES } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route 
          path={ROUTES.CART}
          component={Cart}
        />
        <Route 
          path={ROUTES.CHECKOUT}
          component={Checkout}
        />
        <Route 
          path={`${ROUTES.DETAILS}/:list`}
          component={ProductDetails}
        />
        <Route 
          path={ROUTES.HOME}
          component={Home}
        />
        <Redirect to={ROUTES.HOME}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;