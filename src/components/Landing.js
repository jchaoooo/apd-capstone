import React, {Component} from 'react';
import './../styles/Landing.css';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

class Landing extends Component {
  render () {
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2,
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
              <h1>VCO APD</h1>
                <p>
                  Architecture walls have become so popular for VCO that we staff a dedicated division to assist with anything from a single glass storefront to a fast-paced, multi-floor undertaking. VCO California is a licensed “B” Contractor.
                </p>
              <a className="btn" href="/"><span>Learn More</span></a>
            </div>
          </div>
        </section>

        <section className="landing-story">
            <div className="point">
              <h2 className="point-title">Our Story</h2>
              <p className="point-description">
                Vangard Concept Offices, now simplified as VCO, started as a team of eight and grew to over 800 by the late 1990’s. VCO, previously Business Interiors (BI) then Business Resource Group (BRG), worked with some of the most innovative companies from Cisco and Polycom to Netflix and Silicon Valley Bank.
                Over three decades, we have grown into the largest Teknion dealer in North America. Our custom workplace projects can be found in hundreds of offices around the world.
                VCO continues to manage long term partnerships with the industry’s highest level of service.
              </p>
            </div>
        </section>

        <section className="landing-services">
            <div className="point">
              <h2 className="point-title">Services</h2>
                <ul>
                  <li>Design</li>
                  <li>Product solutions</li>
                  <li>Project Management</li>
                  <li>Installation and Reconfiguration</li>
                  <li>Inventory</li>
                </ul>
            </div>
        </section>

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
      </div>
    )
  }
}


export default Landing;
