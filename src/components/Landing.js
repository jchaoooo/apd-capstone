import React, {Component} from 'react';
import './../styles/Landing.css';

class Landing extends Component {
  render () {
    return (
      <div>
        <section className="landing-intro">
          <div className="inner">
            <div className="content">
              <h1>VCO APD</h1>
                <p>
                  Architecture walls have become so popular for VCO that we staff a dedicated division to assist with anything from a single glass storefront to a fast-paced, multi-floor undertaking. VCO California is a licensed “B” Contractor.
                </p>
              <a className="btn" href="/">Learn More</a>
            </div>
          </div>
        </section>

        <section className="landing-details">
          <h1 className="main-title">Architectural Products Division</h1>

          <section className="selling-points">
            <div className="point">
              <h2 className="point-title">Our Story</h2>
              <p className="point-description">Description of our story goes here</p>
            </div>
            <div className="point">
              <h2 className="point-title">Our Services</h2>
              <p className="point-description">List of our services goes here</p>
            </div>
          </section>
        </section>
      </div>
    )
  }
}


export default Landing;
