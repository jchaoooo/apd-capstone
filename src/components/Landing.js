import React, {Component} from 'react';
import './../styles/Landing.css';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import {MdBuild, MdAccessAlarm, MdList, MdModeEdit, MdExtension} from 'react-icons/md';
import {FaLinkedinIn, FaFacebookF, FaInstagram} from 'react-icons/fa';

class Landing extends Component {
  render () {
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <section className="landing-intro">
          <div className="inner">
            <div className="content">
              <h2>
                Demountable partitions are a perfect solution designed for function, aesthetic and flexibility.
              </h2>
              <a className="btn" href="/">SEE PRODUCTS</a>
            </div>
          </div>
        </section>

        <section className="landing-story">
            <div className="point">
              <a className="btn-team" href="/about">Meet the team</a>
              <h2 className="point-title">ARCHITECTURAL PRODUCTS DIVISION</h2>
              <h3 className="point-title2">A division of Vangard Concept Offices</h3>
              <p className="point-description">
                  Create a quiet private office, meeting room or telephone room. Quickly reconfigure and upgrade walls to adapt to changes in the workforce, and integrate your own new or existing technologies with ease. Architecture walls have become so popular for VCO that we staff a dedicated division to assist with anything from a single glass storefront to a fast-paced, multi-floor undertaking.
              </p>
              <p>VCO APD is a California licensed “B” Contractor.</p>
            </div>
        </section>

        <hr className="horizontal-line"></hr>

        <section className="landing-services">
            <div className="point">
              <h2 className="point-title">Services</h2>
                <table className="table">
                  <tr>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td scope="col"><MdModeEdit className="icon"></MdModeEdit></td>
                          </tr>
                          <tr>
                            <td data-header="design"><p>Design</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td scope="col"><MdExtension className="icon"></MdExtension></td>
                          </tr>
                          <tr>
                            <td data-header="design"><p>Product Solutions</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td scope="col"><MdAccessAlarm className="icon"></MdAccessAlarm></td>
                          </tr>
                          <tr>
                            <td data-header="design"><p>Project Management</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td scope="col"><MdBuild className="icon"></MdBuild></td>
                          </tr>
                          <tr>
                            <td data-header="design"><p>Installation & Reconfiguration</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td scope="col"><MdList className="icon"></MdList></td>
                          </tr>
                          <tr>
                            <td data-header="design"><p>Inventory</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </table>
              <a className="btn-services" href="/services">See more services</a>
            </div>
        </section>

        <hr className="horizontal-line"></hr>

        <section className="landing-projects">
            <div className="point">
              <div className="slider">
                <Slider {...settings}>
                    <div className="slider-wrapper">
                          <img src={require("./../images/carousel/1.jpg")} alt="focus-wall" className="slider-image" />
                          <div className="image-hover-reveal">
                            <h3>Project Name</h3>
                          </div>
                    </div>
                    <div className="slider-wrapper">
                        <img src={require("./../images/carousel/2.jpg")} alt="optos-wall"className="slider-image" />
                        <div className="image-hover-reveal">
                          <h3>Project Name</h3>
                        </div>
                    </div>
                    <div className="slider-wrapper">
                        <img src={require("./../images/carousel/3.jpg")} alt="altos-wall"className="slider-image" />
                        <div className="image-hover-reveal">
                          <h3>Project Name</h3>
                        </div>
                    </div>
                    <div className="slider-wrapper">
                        <img src={require("./../images/carousel/4.jpg")} alt="altos-wall" className="slider-image" />
                        <div className="image-hover-reveal">
                          <h3>Project Name</h3>
                        </div>
                    </div>
                    <div className="slider-wrapper">
                        <img src={require("./../images/carousel/5.jpg")} alt="altos-wall" className="slider-image" />
                        <div className="image-hover-reveal">
                          <h3>Project Name</h3>
                        </div>
                    </div>
                    <div className="slider-wrapper">
                        <img src={require("./../images/carousel/6.jpg")} alt="altos-wall" className="slider-image" />
                        <div className="image-hover-reveal">
                          <h3>Project Name</h3>
                        </div>
                    </div>
                </Slider>
              </div>
              <a className="btn-project" href="/projects"><span>EXPLORE MORE PROJECTS</span></a>
            </div>
        </section>

        <section className="landing-contact">
          <div className="contact-wrapper">
            <div className="contact-slogan">
              <h3>PLAN.</h3>
              <h3>CREATE.</h3>
              <h3>TRANSFORM</h3>
            </div>
            <a className="btn-contact" href="/projects"><strong>Contact Us</strong></a>
          </div>
        </section>

        <section className="footer">
          <div className="footer-wrapper">
            <img src={require("./../images/vco-logo.png")} alt="vco-logo" className="vco-logo" />
            <p>VISIT VCOFFICES.COM FOR OTHER SERVICES</p>
            <div className="connect">
              <FaLinkedinIn className="icon-contact"></FaLinkedinIn>
              <FaFacebookF className="icon-contact"></FaFacebookF>
              <FaInstagram className="icon-contact"></FaInstagram>
            </div>
            <div className="legal">
              <a href="/projects">Terms of Use</a>
              <a href="/projects">Privacy</a>
              <a href="/projects">Locations</a>
            </div>
            <div className="copyright">
              <p>&#169; VANGARD CONCEPT OFFICES 2018</p>
              <p>All Rights Reserved.  A Preferred Teknion Dealer.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


export default Landing;
