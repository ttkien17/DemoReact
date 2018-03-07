import React, { Component } from "react";
import { CardHeader, FormGroup, Label, Form, Alert, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Col xs="12" md={12}>
                <Card>
                {/* Page Container */}
                <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
                  {/* The Grid */}
                  <div className="w3-row-padding">
                    {/* Left Column */}
                    <div className="w3-third">
                      <div className="w3-white w3-text-grey w3-card-4">
                        <div className="w3-display-container">
                          <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/p206x206/20293067_837432843073042_3869669403199523702_n.jpg?oh=8c9e9f5634677cbfd9ce39a80380de07&oe=5B4BF601" style={{width: '100%'}} alt="Avatar" />
                          <div className="w3-display-bottomleft w3-container w3-text-black">
                            <h2>Kien Tran</h2>
                          </div>
                        </div>
                        <div className="w3-container">
                          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Dev</p>
                          <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />HCM, Viet Nam</p>
                          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />kien.tran@terralogic.com</p>
                          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />+84 972809802</p>
                          <hr />
                          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
                          <p>Web</p>
                          <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
                          </div>
                          <p>Web</p>
                          <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
                              <div className="w3-center w3-text-white">80%</div>
                            </div>
                          </div>
                          <p>Web</p>
                          <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
                          </div>
                          <p>Web</p>
                          <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
                          </div>
                          <br />
                          <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                          <p>English</p>
                          <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '100%'}} />
                          </div>
                          <p>English</p>
                          <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '55%'}} />
                          </div>
                          <p>English</p>
                          <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '25%'}} />
                          </div>
                          <br />
                        </div>
                      </div><br />
                      {/* End Left Column */}
                    </div>
                    {/* Right Column */}
                    <div className="w3-twothird">
                      <div className="w3-container w3-card w3-white w3-margin-bottom">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2015 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                          <hr />
                        </div>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2012 - Dec 2014</h6>
                          <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                          <hr />
                        </div>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jun 2010 - Mar 2012</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                        </div>
                      </div>
                      <div className="w3-container w3-card w3-white">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>W3Schools.com</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Forever</h6>
                          <p>Web Development! All I need to know in one place</p>
                          <hr />
                        </div>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>London Business School</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013 - 2015</h6>
                          <p>Master Degree</p>
                          <hr />
                        </div>
                        <div className="w3-container">
                          <h5 className="w3-opacity"><b>School of Coding</b></h5>
                          <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 - 2013</h6>
                          <p>Bachelor Degree</p><br />
                        </div>
                      </div>
                      {/* End Right Column */}
                    </div>
                    {/* End Grid */}
                  </div>
                  {/* End Page Container */}
                </div>
                
                </Card>
            </Col>
        );
    }
}

export default Home