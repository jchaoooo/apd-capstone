import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Products extends Component {
  render() {
    return (
      <section className="products">
        <div className="products-block">
          <img id="altos-products-img" src={require("./../images/products-altos.jpg")} alt="altos-photo" width="100"/>
          <h1 className="products-title">Altos</h1>
          <p className="products-description">
            The use of laminate, veneer, glass and fabric allows creative application of finishes. Thin, anodized frames project a modern aesthetic, while vertical and horizontal reveals add visual interest. Simple and efficient, Altos facilitates cost-effective reconfiguration or full relocation as required. Its unique universal framework allows changes in elevation, dimension, Fascia function and finish to maximize the life of the product.
          </p>
          <Link to='./Altos'>
            <button type="button">Click for more information on Altos</button>
          </Link>
        </div>
        <div className="products-block">
          <img id="altos-products-img" src={require("./../images/products-optos.jpg")} alt="optos-photo" width="100"/>
          <h1 className="products-title">Optos</h1>
          <p className="products-description">
            Optos is a glass wall system featuring a rectilinear profile and minimal structure that presents a refined, seamless look through a continuous run of glass. Designed to adapt to building structures and floor plans, Optos provides full space division through functional integration with Teknion’s Altos architectural walls and compatible floor/ceiling leveling capabilities.
          </p>
          <Link to='./Optos'>
            <button type="button">Click for more information on Optos</button>
          </Link>
        </div>
        <div className="products-block">
          <img id="altos-products-img" src={require("./../images/products-focus.jpg")} alt="focus-photo" width="100"/>
          <h1 className="products-title">Focus</h1>
          <p className="products-description">
            The Focus demountable wall system delivers a high level of acoustic performance with a clean, European aesthetic and a broad range of finish options. It seamlessly integrates a variety of glass and solid fascias to create productive, modern workspaces.
          </p>
          <Link to='./Focus'>
            <button type="button">Click for more information on Focus</button>
          </Link>
        </div>
      </section>
    )
  }
}

export default Products;
