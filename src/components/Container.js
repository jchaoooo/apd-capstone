import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Landing from './Landing';
import Products from './Products';
import Contact from './Contact';
import Services from "./Services";
import About from "./About";

const Container = ({location}) => {
  const timeout = { enter: 500, exit: 500 }

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={timeout} classNames="fade" appear>
              <Switch location={location}>
                <Route exact path="/" component={Landing} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
              </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default withRouter(Container);
