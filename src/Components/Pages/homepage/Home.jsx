import React, { Component } from 'react'
import { Container, Row, Col, Carousel, Image, Form } from 'react-bootstrap';
import SideNavigation from '../../sidemenubar/SideNavigation'
import '../homepage/_home.scss';
import FindSpace from '../../Pages/homepage/findspace/FindSpace';
import FindSpaceItems from '../../Pages/homepage/findspace/FindSpaceItems';
import LevelTabs from './LevelTabs';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <SideNavigation />
                <section className="main-wrapper-content">
                    <section className="homewrapper-background">
                        <div className="homewrapper-overlay">
                            <Row className="no-gutters">
                                <Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
                                    <div className="logo-section">
                                        <h1 className="logo-title">Silicon Hills</h1>
                                    </div>
                                    <div className="welcome-content">
                                        <h1><b>Welcome to the new Heart of Austin</b></h1>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <Carousel className="home-slider">
                        <Carousel.Item className="slideitem">
                            <Image src={require('../../../assets/images/siliconslide1.png')} className="w-100" alt="Image" />
                            <Carousel.Caption className="slide-content">
                                <h6 className="section-title">Silicon Hills Premises</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slideitem">
                            <Image src={require('../../../assets/images/siliconslide1.png')} className="w-100" alt="Image" />
                            <Carousel.Caption className="slide-content">
                                <h6 className="section-title">Silicon Hills Premises</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slideitem">
                            <Image src={require('../../../assets/images/siliconslide1.png')} className="w-100" alt="Image" />
                            <Carousel.Caption className="slide-content">
                                <h6 className="section-title">Silicon Hills Premises</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <section className="about-introduction pt-5 pb-5 mb-2 text-center px-2">
                        <div className="row">
                            <div className="offset-lg-1 col-lg-10 col-md-12 col-sm-12">
                                <p>Silicon Hills is Austin’s next great neighborhood that mixes offices, retail, dining,
                                    entertainment, hotels, residences, and vibrant street life,
                                    extending and enhancing the texture and feel of Austin in a natural park-like setting.
                                    This 158-acre “city within a city” starts with the
                                    transformation of the 1.3 million square foot iconic former 3M Austin Center, the
                                    birthplace for technology in Austin. The building in to
                                    Silicon Hills Power Station – a mixed-use destination with restaurants, a food hall,
                            shops, and creative office space.</p>
                            </div>
                        </div>
                    </section>
                    <section className="find-space">
                        <div className="space-overlay text-center">
                            <Container>
                                <FindSpace FindSpaceItems={FindSpaceItems} />
                            </Container>
                            <div className="submit-button">
                                <a href="/#" className="find-submit btn btn-light text-uppercase"><span className="">Find
                                space</span> <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </section>
                    <section className="home-map-location text-center">
                        <Image src={require('../../../assets/images/homemap.png')} alt="Image" />
                        <div className="home-map-content py-5 text-center">
                            <h2 className="map-loc section-title"><i className="fal fa-map-marker-alt pr-3"></i>6801 River Pl Blvd, Austin,
                        TX 78726</h2>
                        </div>
                    </section>
                    <section className="home distance-timing text-center py-5">
                        <Container>
                            <Row>
                                <Col lg={4} md={6} sm={12} className="my-4">
                                    <Image src={require('../../../assets/images/car1.png')} width="50" alt="Image" />
                                    <div className="timing-content text-uppercase py-2">
                                        <h2 className="section-title pb-2"><span>4</span> Miles</h2>
                                        <p>from TX Hwy 360, offering North/South access to Austin suburbs</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="my-4">
                                    <Image src={require('../../../assets/images/plane.png')} width="40" alt="Image" />
                                    <div className="timing-content text-uppercase py-2">
                                        <h2 className="py-2 section-title">20 Min</h2>
                                        <p>from the Austin International Airport</p>
                                    </div>
                                </Col>
                                <Col lg={4} md={6} sm={12} className="my-4">
                                    <Image src={require('../../../assets/images/timing.png')} width="40" alt="Image" />
                                    <div className="timing-content text-uppercase py-2">
                                        <h2 className="py-2 section-title">20 Min</h2>
                                        <p>to Downtown Austin</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="home tenant-ameneties text-center py-4">
                        <Container>
                            <Row>
                                <Col lg={{ span: 10, offset: 1 }} md={12} sm={12} className="pl-4">
                                    <h2 className="section-title pt-5">Tenant Amenities</h2>
                                    <p>The Offices at Silicon Hills is pleased to offer a range of options for tenants,
                                        including traditional lease, flexible workspace through NowSpace, and even single tenant
                                occupancy. Tenant amenities include:</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="home tenant-ameneties-list py-5">
                        <Row className="no-gutters">
                            <Col lg={3} md={6} sm={6}>
                                <div className="tenant-card-item">
                                    <Image src={require('../../../assets/images/foodhall.png')} className="img-fluid" alt="Image" />
                                    <div className="ameneties-slide-content active flex-column">
                                        <h3 className="section-title">Food hall</h3>
                                        <a href="/#"><i className="fal fa-angle-right pt-5"></i></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="tenant-card-item">
                                    <Image src={require('../../../assets/images/nature-preserve.png')} className="img-fluid" alt="Image" />
                                    <div className="ameneties-slide-content flex-column">
                                        <h3 className="section-title">Nature Preserve</h3>
                                        <a href="/#" className=""><i className="fal fa-angle-right pt-4"></i></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="tenant-card-item">
                                    <Image src={require('../../../assets/images/theroof.png')} className="img-fluid" alt="Image" />
                                    <div className="ameneties-slide-content flex-column">
                                        <h3 className="section-title">The Roof</h3>
                                        <a href="/#"><i className="fal fa-angle-right pt-5"></i></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6}>
                                <div className="tenant-card-item">
                                    <Image src={require('../../../assets/images/life-wellness.png')} className="img-fluid" alt="Image" />
                                    <div className="ameneties-slide-content flex-column">
                                        <h3 className="section-title">whole Life Wellness</h3>
                                        <a href="/#"><i className="fal fa-angle-right pt-4"></i></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <Carousel className="flexible-demises-slider">
                        <Carousel.Item className="single-item">
                            <Image src={require('../../../assets/images/flexible-bg.png')} />
                            <div className="flexible-slider-content">
                                <h2 className="section-title">Our Flexible Demises</h2>
                                <p>At the intersection of RR 2222 and Riverplace Boulevard, the Offices are located in the heart
                                    of not only the birthplace of Silicon Hills, but also of some of the most desirable school
                                    districts and residential areas in the Austin MSA. Notable location statistics for The
                            Offices at Silicon Hills Power Station:</p>
                                <ul className="list-unstyled flexible-list">
                                    <li className="flexible-list-items"><p>Aenean lacinia bibendum nulla sed consectetur great mercy
                            </p></li>
                                    <li className="flexible-list-items"><p>In the tumultuous business of cutting-in and supreme wisher
                                we love</p></li>
                                    <li className="flexible-list-items"><p>I have hinted that I would often jerk poor Qu heatred rich
                                glory</p></li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="single-item">
                            <Image src={require('../../../assets/images/flexible-bg.png')} />
                            <div className="flexible-slider-content">
                                <h2 className="section-title">Our Flexible Demises</h2>
                                <p>At the intersection of RR 2222 and Riverplace Boulevard, the Offices are located in the heart
                                    of not only the birthplace of Silicon Hills, but also of some of the most desirable school
                                    districts and residential areas in the Austin MSA. Notable location statistics for The
                            Offices at Silicon Hills Power Station:</p>
                                <ul className="list-unstyled flexible-list">
                                    <li className="flexible-list-items"><p>Aenean lacinia bibendum nulla sed consectetur great mercy
                            </p></li>
                                    <li className="flexible-list-items"><p>In the tumultuous business of cutting-in and supreme wisher
                                we love</p></li>
                                    <li className="flexible-list-items"><p>I have hinted that I would often jerk poor Qu heatred rich
                                glory</p></li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="single-item">
                            <Image src={require('../../../assets/images/flexible-bg.png')} />
                            <div className="flexible-slider-content">
                                <h2 className="section-title">Our Flexible Demises</h2>
                                <p>At the intersection of RR 2222 and Riverplace Boulevard, the Offices are located in the heart
                                    of not only the birthplace of Silicon Hills, but also of some of the most desirable school
                                    districts and residential areas in the Austin MSA. Notable location statistics for The
                            Offices at Silicon Hills Power Station:</p>
                                <ul className="list-unstyled flexible-list">
                                    <li className="flexible-list-items"><p>Aenean lacinia bibendum nulla sed consectetur great mercy
                            </p></li>
                                    <li className="flexible-list-items"><p>In the tumultuous business of cutting-in and supreme wisher
                                we love</p></li>
                                    <li className="flexible-list-items"><p>I have hinted that I would often jerk poor Qu heatred rich
                                glory</p></li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="single-item">
                            <Image src={require('../../../assets/images/flexible-bg.png')} />
                            <div className="flexible-slider-content">
                                <h2 className="section-title">Our Flexible Demises</h2>
                                <p>At the intersection of RR 2222 and Riverplace Boulevard, the Offices are located in the heart
                                    of not only the birthplace of Silicon Hills, but also of some of the most desirable school
                                    districts and residential areas in the Austin MSA. Notable location statistics for The
                            Offices at Silicon Hills Power Station:</p>
                                <ul className="list-unstyled flexible-list">
                                    <li className="flexible-list-items"><p>Aenean lacinia bibendum nulla sed consectetur great mercy
                            </p></li>
                                    <li className="flexible-list-items"><p>In the tumultuous business of cutting-in and supreme wisher
                                we love</p></li>
                                    <li className="flexible-list-items"><p>I have hinted that I would often jerk poor Qu heatred rich
                                glory</p></li>
                                </ul>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <section className="home level-list-tabs pt-3">
                        <LevelTabs />
                    </section>
                    <section className="home contact-us text-center">
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }} md={12} sm={12}>
                                <div className="contact-form">
                                    <h2 className="section-title">Contact Us</h2>
                                    <Row className="no-gutters address-list">
                                        <Col lg={4} md={12} sm={12}>
                                            <div className="address-list-item">
                                                <p><i className="far fa-envelope pr-2"></i> sh_powerstation@sh.com</p>
                                            </div>
                                        </Col>
                                        <Col lg={3} md={12} sm={12}>
                                            <div className="address-list-item">
                                                <p><i className="far fa-phone-alt pr-2"></i> 512.327.3300</p>
                                            </div>
                                        </Col>
                                        <Col lg={5} md={12} sm={12}>
                                            <div className="address-list-item">
                                                <p><i className="fal fa-map-marker-alt pt-1 pr-2"></i> 6801 River Pl Blvd Austin, TX
                                                    78726
                                    </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="form-signin py-5">
                                        <p>We will not use your contact information for any other purpose than
                                            responding
                                to your inquiry.</p>
                                        <Form className="py-5">
                                            <Form.Group className="mb-0" controlId="formGroupName">
                                                <Form.Control className="form-fields" placeholder="Your Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-0 optional-relative" controlId="formGroupPassword">
                                                <Form.Control className="form-fields" placeholder="Phone Number" />
                                                <span className="optional-text">Optional</span>
                                            </Form.Group>
                                            <Form.Group className="mb-0" controlId="formGroupEmail">
                                                <Form.Control type="email" className="form-fields" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control className="form-fields" as="textarea" rows="3" placeholder="Message" />
                                            </Form.Group>
                                            <div className="submit-button">
                                                <a href="/#" className="find-submit send btn btn-dark btn-block text-uppercase py-2" type="submit">Send<i
                                                    className="fas fa-chevron-right angle-icon"></i></a>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <footer className="copyright py-3 text-center">
                        <p>2020 Silicon Hills. All rights reserved</p>
                    </footer>
                </section>
            </React.Fragment>
        )
    }
}

export default Home
