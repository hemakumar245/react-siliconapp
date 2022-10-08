import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../sidemenubar/SideNavigation';
import SideNavigation from "../sidemenubar/SideNavigation";

export class Dining extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="main-content">
                    <SideNavigation />
                    <div className="main-wrapper-content">
                        <div className="pagewrapper-background dining">
                            <div className="pagewrapper-overlay text-center">
                                <Container>
                                    <Row>
                                        <Col lg={{ span: 10, offset: 1 }}>
                                            <div className="page-top-section">
                                                <h3>Silicon Hills</h3>
                                                <div className="page-title">
                                                    <h1 className="section-title p-0">Dining</h1>
                                                    <p>Food Meets Experience</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        <Container>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p align="center">Coming Soon.</p>
                        </Container>
                        {/* <div className="gallery py-4 px-5">
                            <div className="container">
                                <div id="gallery-list" className="text-uppercase">
                                    <button className="gallery-links btn active" onclick="filterSelection('all')"> All</button>
                                    <button className="gallery-links btn" onclick="filterSelection('bruch')"> Bruch</button>
                                    <button className="gallery-links btn" onclick="filterSelection('happyhours')"> Happy Hour</button>
                                    <button className="gallery-links btn" onclick="filterSelection('specials')"> Specials</button>
                                </div>

                                <div className="row pt-4">
                                    <div className="col-lg-3 col-md-6 col-sm-12 column bruch">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 px-5 mb-3">
                                                <img src={require('../assets/images/fantasia.png')} alt="Image" className="img-fluid my-2 mx-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column bruch">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 pt-4 pb-3 px-5 mb-3">
                                                <img src={require('../assets/images/bluebottle.png')} alt="Image" className="img-fluid px-2" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column bruch">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-2 px-5 mb-3">
                                                <img src={require('../assets/images/starbucks.png')} alt="Image" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column bruch">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-3 px-5 mb-3">
                                                <img src={require('../assets/images/veggiegrill.png')} alt="Image" className="img-fluid py-4 my-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column happyhours">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-5 px-5 mb-3">
                                                <img src={require('../assets/images/maggiano.png')} alt="Image" className="img-fluid pt-3 pb-4" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column happyhours">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-5 px-5 mb-3">
                                                <img src={require('../assets/images/pizzantica.png')} alt="Image" className="img-fluid pt-4 pb-4" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 column happyhours">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-5 px-5 mb-3">
                                                <img src={require('../assets/images/sino.png')} alt="Image" className="img-fluid pb-1" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-12 column specials">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-4 px-5 mb-3">
                                                <img src={require('../assets/images/smitterice.png')} alt="Image" className="img-fluid py-2" />
                                            </div>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="copyright py-3 text-center">
                            <p>2020 Silicon Hills. All rights reserved</p>
                        </div> */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Dining;
