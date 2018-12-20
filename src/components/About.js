import React, { Component } from 'react';
import './../styles/About.css';
import {Tabs, Tab, Row, Col} from 'muicss/react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-us">
          <Row>
            <Col md="4">
                <h1>Who <strong>we are</strong></h1>
            </Col>
            <Col md="8">
                <div>
                    <p>Founded in 1987 in Silicon Valley, VCO is ranked as the largest distributor of Teknion products in North America. VCO has proven strengths and a strong track record working with large complex organizations, specifically in the technology and financial services industries.  VCO has developed a comprehensive business model that provides turnkey services on larger more complex fit ups. Because of this model we can support the needs of our clients from the beginning of a project through final assembly & move in, as well as day two post occupancy support services.</p>
                    <p>At VCO, it is our vision that we can be your single source full service provider for design implementation, procurement of furniture and project management. We can bring you the best possible pricing by leveraging your purchasing power.</p>
                </div>
            </Col>
          </Row>
        </div>

        <div className="team-section">
          <div className="team-photo">
            <h2>Meet <strong>the team</strong></h2>
          </div>
        </div>

        <div className="meet-the-team">
            <Tabs onChange={this.onChange} defaultSelectedIndex={0}>
                <Tab className="team-tab" value="US" label="US Office" onActive={this.onActive}>
                  <Row className="team-photos">
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/jeff-tuttle.jpg")} alt="jeff-tuttle" className="about-img" />
                      <p className="member-name">Jeff Tuttle</p>
                      <p>CEO</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/nick-tuttle.jpg")} alt="nick-tuttle" className="about-img" />
                      <p className="member-name">Nick Tuttle</p>
                      <p>President</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="tim-thomas" className="about-img" />
                      <p className="member-name">Tim Thomas</p>
                      <p>CFO</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/mike-clow.jpg")} alt="mike-clow" className="about-img" />
                      <p className="member-name">Mike Clow</p>
                      <p>Vice President</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/mike-slevin.JPG")} alt="mike-slevin" className="about-img" />
                      <p className="member-name">Mike Slevin</p>
                      <p>Vice President</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/mike-williams.jpg")} alt="mike-williams" className="about-img" />
                      <p className="member-name">Mike Williams</p>
                      <p>Project Manager</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/jessica-chao.JPG")} alt="jessica-chao" className="about-img" />
                      <p className="member-name">Jessica Chao</p>
                      <p>Design Manager</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/katie-bunton.JPG")} alt="katie-bunton" className="about-img" />
                      <p className="member-name">Katie Bunton</p>
                      <p>Project Designer</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="shannon-charles" className="about-img" />
                      <p className="member-name">Shannon Charles</p>
                      <p>Project Coordinator</p>
                    </Col>
                  </Row>
                </Tab>
                <Tab className="team-tab" value="CAD" label="Canada Office" onActive={this.onActive}>
                  <Row className="team-photos">
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="chris-rayner" className="about-img" />
                      <p className="member-name">Chris Rayner</p>
                      <p>President</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/derrek-verschuren.jpg")} alt="derrek-verschuren" className="about-img" />
                      <p className="member-name">Derrek Verschuren</p>
                      <p>Project Executive</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="rosanna-debarrios" className="about-img" />
                      <p className="member-name">Rosanna De Barrios</p>
                      <p>Project Coordinator</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="darren-browne" className="about-img" />
                      <p className="member-name">Darren Browne</p>
                      <p>Field Project Manager</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="paul-brown" className="about-img" />
                      <p className="member-name">Paul Brown</p>
                      <p>Project Superintendent</p>
                    </Col>
                    <Col md="4" className="team-info">
                      <img src={require("./../images/team/unknown.jpg")} alt="tanya-clark" className="about-img" />
                      <p className="member-name">Tanya Clark</p>
                      <p>Project Manager</p>
                    </Col>
                  </Row>
                </Tab>
            </Tabs>
        </div>
      </div>
    )
  }
}

export default About;
