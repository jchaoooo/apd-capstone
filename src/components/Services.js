import React, { Component } from 'react';
import './../styles/Services.css';
import {Row, Col, Button} from 'muicss/react';
import {MdBuild, MdAccessAlarm, MdList, MdModeEdit, MdExtension, MdFavorite, MdSchedule, MdFlashOn} from 'react-icons/md';
import { Link } from 'react-router-dom';


class Services extends Component {
  render() {
    return (
      <div className="service-container">
          <section className="service-photo">
            <div className="cover-overlay">
              <h1>Our Services</h1>
            </div>
          </section>

          <section className="services">
              <Row>
                  <Col md="4">
                    <div className="service-info">
                      <MdModeEdit className="service-icon"/>
                      <h2>Design</h2>
                      <p>We offer full design services including workplace strategy, typical development, 3D renderings, space planning, technical specification, fabric and finish selections, installation drawings and field verification.</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="service-info">
                      <MdExtension className="service-icon"/>
                      <h2>Product Solutions</h2>
                      <p>As workplace design and project management specialists, we help create and refine your vision for the office. We provide idea starters, full floor plan product selections, and offerings that fit within your budget. If you need furniture fast, we have a quick ship program and can also provide pre-owned furniture solutions.</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="service-info">
                      <MdAccessAlarm className="service-icon"/>
                      <h2>Project Management</h2>
                      <p>Our experienced and dependable project managers provide you one point of contact to tailor your project to specific budget and schedule needs. Dedicated project managers guide you through every step including planning, installation and revisions.</p>
                    </div>
                  </Col>
              </Row>
              <Row>
                  <Col md="6">
                    <div className="service-info">
                      <MdBuild className="service-icon"/>
                      <h2>Installation and Reconfiguration</h2>
                      <p>Whether you are moving to an upgraded location or just reconfiguring your current office space, we have done it all before. We outline your schedule and communication plan, and our team will oversee the production and installation processes to ensure they run smoothly.</p>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="service-info">
                      <MdList className="service-icon"/>
                      <h2>Inventory</h2>
                      <p>Our services don’t end after “move in day” - you can contact the same team for any day-to-day or ongoing needs. We can provide ergonomic consulting and custom-tailor your furniture to ensure that you have an efficient, productive and healthy work environment. We understand that an investment in office furniture is also an investment in your people.</p>
                    </div>
                  </Col>
              </Row>
          </section>

          <section className="services-contact">
            <div className="overlay">
              <h2>Schedule a consultation</h2>
              <p>Have questions?  Connect with us to discuss the different ways we can help you!</p>
              <a className="btn-contact" href="/"><strong>Let's Talk</strong></a>
            </div>
          </section>

          <section className="why-us">
              <h1>Why Us?</h1>
              <Row>
                  <Col md="4">
                      <div className="reasons">
                          <MdFlashOn className="service-icon" />
                          <h2>We're Creative</h2>
                          <p>We pride ourselves on embracing our creativity with every project. We love a good challenge, and rise to the opportunity to bring innovation, new ideas, and beautiful design to our work.</p>
                      </div>
                  </Col>
                  <Col md="4">
                      <div className="reasons">
                          <MdSchedule className="service-icon" />
                          <h2>We're Punctual</h2>
                          <p>Regardless of project size, we are dedicated to timely, efficient, and diligent work. We are determined to complete each project in our projected timelines with the highest level of detail possible.</p>
                      </div>
                  </Col>
                  <Col md="4">
                      <div className="reasons">
                          <MdFavorite className="service-icon" />
                          <h2>We're Passionate</h2>
                          <p>Every member of our team shares the same foundation: A passion for our jobs and in helping to build transformations. We embrace every opportunity to learn, grow, and enhance our skill sets.</p>
                      </div>
                  </Col>
              </Row>
          </section>
      </div>
    )
  }
}

export default Services;
