import React, {Component} from 'react';
import './../styles/Contact.css';
import {Tabs, Tab, Button, Row, Col} from 'muicss/react';

class Contact extends Component {
  onChange(i, value, tab, ev) {
    console.log(arguments);
  }

  onActive(tab) {
    console.log(arguments);
  }

  render() {
    return(
      <div className="contact-container">
        <section className="contact-photo">
          <div className="contact-overlay">
            <h1>Contact Us</h1>
            <div className="contact-btn">
                <Button size="small" variant="raised">Email Us</Button>
                <Button size="small" variant="raised">Request a Quote</Button>
            </div>
          </div>
        </section>

        <section className="contact-information">
          <Tabs onChange={this.onChange} defaultSelectedIndex={0}>
            <Tab className="contact-tab" value="US" label="US Locations" onActive={this.onActive}>
                <Row>
                    <Col md="3" className="info">
                        <div className="info-1">
                            <h3>San Jose (Main Office)</h3>
                            <div className="address">
                                <p>2150 North First Street, Suite 100</p>
                                <p>San Jose, CA 95131</p>
                            </div>
                            <div className="phone-number">
                                <p>(408)325-3200</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="info">
                        <div className="info-2">
                            <h3>San Francisco</h3>
                            <div className="address">
                                <p>250 Sutter Street, Suite 300</p>
                                <p>San Francisco, CA 94108</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="info">
                        <div className="info-3">
                            <h3>Pleasanton</h3>
                            <div className="address">
                                <p>6800 Koll Center Pkwy, Suite 100</p>
                                <p>Pleasanton, CA 94566</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3" className="info">
                        <div className="info-4">
                            <h3>Sacramento</h3>
                            <div className="address">
                                 <p>1731 East Roseville Pkwy, Suite 190</p>
                                 <p>Roseville, CA 95661</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Tab>
            <Tab className="contact-tab" value="CAN" label="Canada Locations">
              <Row>
                    <Col md="6" className="info">
                          <div className="info-5">
                              <h3>Toronto (Main Office)</h3>
                              <div className="address">
                                  <p>4800 Eastgate Parkway, Unit #1</p>
                                  <p>Mississauga, Ontario L4W 3W6</p>
                              </div>
                              <div className="phone-number">
                                  <p>(905)602-7900</p>
                              </div>
                          </div>
                    </Col>
                    <Col md="6" className="info">
                          <div className="info-6">
                              <h3>Markham</h3>
                              <div className="address">
                                  <p>11 Allstate Parkway, Suite 204</p>
                                  <p>Markham, Ontario L3R 9T8</p>
                              </div>
                          </div>
                    </Col>
              </Row>
            </Tab>
          </Tabs>
        </section>
      </div>
    )
  }
}

export default Contact;
