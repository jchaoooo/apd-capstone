import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Products.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import {Row, Col, Panel} from 'muicss/react';


class Products extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    }
    return (
      <div>
          <section className="products-cover">
              <div className="products-overlay">
                <h1>Products</h1>
              </div>
          </section>

          <section className="products-statement">
            <Panel>
              <h2>Prefabricated Walls</h2>
              <p>Architectural and demountable walls define space while providing a sense of permanence. The variety of materials available can be used to create visually appealing and highly functional spaces. The walls can host power, technology and various work tools. </p>
              <p>Movable walls are more cost effective than traditional construction particularly when future reconfigurations are anticipated. With possible tax benefits and its re-usable nature, wall product has a greater long-term value. Relocating wall product is quicker, cleaner and requires fewer contractors as opposed to the demolition and rebuilding of drywall.</p>
            </Panel>
          </section>

          <section className="products">
            <Row>
              <Col md="4">
                  <div className="products-block">
                    <div>
                      <Slider {...settings}>
                          <div className="slider"><img src={require("./../images/products-altos.jpg")} alt="altos" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-altos1.jpg")} alt="altos" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-altos2.jpg")} alt="altos" className="product-image" /></div>
                      </Slider>
                    </div>
                    <h1 className="products-title">Altos</h1>
                    <p className="products-description">
                      The use of laminate, veneer, glass and fabric allows creative application of finishes. Thin, anodized frames project a modern aesthetic, while vertical and horizontal reveals add visual interest. Simple and efficient, Altos facilitates cost-effective reconfiguration or full relocation as required. Its unique universal framework allows changes in elevation, dimension, Fascia function and finish to maximize the life of the product.
                    </p>
                    <div>
                      <Link to='./Altos'>
                        <a className="more-btn" href="/altos">more altos</a>
                      </Link>
                    </div>
                  </div>
              </Col>

              <Col md="4">
                  <div className="products-block">
                    <div>
                      <Slider {...settings}>
                          <div className="slider"><img src={require("./../images/products-optos.jpg")} alt="optos" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-optos.jpg")} alt="optos" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-optos2.jpg")} alt="optos" className="product-image" /></div>
                      </Slider>
                    </div>
                    <h1 className="products-title">Optos</h1>
                    <p className="products-description">
                      Optos is a glass wall system featuring a rectilinear profile and minimal structure that presents a refined, seamless look through a continuous run of glass. Designed to adapt to building structures and floor plans, Optos provides full space division through functional integration with Teknion’s Altos architectural walls and compatible floor/ceiling leveling capabilities.
                    </p>
                    <div>
                      <Link to='./Optos'>
                        <a className="more-btn" href="/optos">more optos</a>
                      </Link>
                    </div>
                  </div>
              </Col>

              <Col md="4">
                  <div className="products-block">
                    <div>
                      <Slider {...settings}>
                          <div className="slider"><img src={require("./../images/products-focus.jpg")} alt="focus" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-focus1.jpg")} alt="focus" className="product-image" /></div>
                          <div className="slider"><img src={require("./../images/products-focus2.jpg")} alt="focus" className="product-image" /></div>
                      </Slider>
                    </div>
                    <h1 className="products-title">Focus</h1>
                    <p className="products-description">
                      The Focus demountable wall system delivers a high level of acoustic performance with a clean, European aesthetic and a broad range of finish options. It seamlessly integrates a variety of glass and solid fascias to create productive, modern workspaces.
                    </p>
                    <div>
                      <Link to='./Focus'>
                        <a className="more-btn" href="/focus">more focus</a>
                      </Link>
                    </div>
                  </div>
              </Col>
            </Row>
          </section>
      </div>
    )
  }
}

export default Products;
