import React, { Component } from 'react';
import {Row, Col,Image} from 'react-bootstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

export class LevelTabs extends Component {
    render() {
        return (
            <div>
                <Tabs
                    defaultTab="levelone"
                    onChange={tabId => {
                        console.log(tabId);
                    }}
                >
                    <TabList>
                        <Tab tabFor="levelone">Level 1</Tab>
                        <Tab tabFor="leveltwo">Level 2</Tab>
                        <Tab tabFor="levelthree">Level 3</Tab>
                        <Tab tabFor="levelfour">Level 4</Tab>
                        <Tab tabFor="levelfive">Level 5</Tab>
                        <Tab tabFor="levelfood">Food Hall</Tab>
                        <Tab tabFor="levelmarket">Market</Tab>
                        <Tab tabFor="levelrooftop">Rooftop</Tab>
                    </TabList>
                    <TabPanel tabId="levelone">
                        <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Level 1</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="leveltwo">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Level 2</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelthree">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Level 3</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelfour">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Level 4</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelfive">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Level 5</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelfood">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Food Hall</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelmarket">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Market</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="levelrooftop">
                    <div className="levels-list-item">
                            <div className="level-water-name">
                                <h1 className="section-title">Rooftop</h1>
                            </div>
                            <div className="level-list-content pt-1 pb-5 px-2">
                                <Row>
                                    <Col lg={{span:'3',offset:'2'}} md={6} sm={12} className="pt-5 mt-5">
                                        <div className="plan-desc-list mb-5">
                                            <p>Total</p>
                                            <h4 className="section-title p-0">254.097 SF</h4>
                                        </div>
                                        <div className="plan-desc-list retail mb-5">
                                            <p>Retail</p>
                                            <h4 className="section-title p-0">130,120 SF</h4>
                                        </div>
                                        <div className="plan-desc-list available mb-5">
                                            <p>Available</p>
                                            <h4 className="section-title p-0">97,549 SF</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <Image src={require('../../../assets/images/plan.png')} className="img-fluid my-2" alt="Image" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default LevelTabs
