import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../sidemenubar/SideNavigation';
import SideNavigation from "../sidemenubar/SideNavigation";

export class Offices extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="main-content">
                    <SideNavigation />
                    <div className="main-wrapper-content">
                        <div className="pagewrapper-background offices">
                            <div className="pagewrapper-overlay text-center">
                                <Container>
                                    <Row>
                                        <Col lg={{ span: 10, offset: 1 }}>
                                            <div className="page-top-section">
                                                <h3>Silicon Hills</h3>
                                                <div className="page-title">
                                                    <h1 className="section-title p-0">Offices</h1>
                                                    <p>
                                                        Equipped with elements to meet the needs of today's
                                                        office tenant
                                                     </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="find-office-bg p-5">
                            <Container>
                                <Row>
                                    <Col lg={{span:'6',offset:'3'}} md={12} sm={12}>
                                        <h3>Find your perfect office now</h3>
                                        <div className="submit-button pb-5">
                                            <a
                                                href="/#"
                                                className="find-submit btn btn-light btn-block text-uppercase"
                                                type="submit"
                                            >
                                                Find Space
                                            <i className="fas fa-chevron-right angle-icon"></i>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p align="center">Coming Soon.</p>
                        </div>
                        {/* <div className="find-offices-list py-4 px-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-5 px-5">
                                                <img src={require('../assets/images/newmark.png')} alt="Image" className="img-fluid py-2" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-5 px-5">
                                                <img src={require('../assets/images/broadsoft.png')} alt="Image" className="img-fluid py-2" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                        <Link to="/shlanding">
                                            <div className="card content border-0 py-3 px-5">
                                                <img src={require('../assets/images/avalonbay.png')} alt="Image" className="img-fluid px-3 py-2" />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                                        <Link to="/shlanding">
                                            <div className="card content gray-bg border-0 py-5 px-4 ">
                                                <h6 className="text-center text-white py-3">Your office Here</h6>
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

export default Offices;
