import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Works.scss';
import '../../styles/shared/fonts-definition.scss';
import mobile from '../../assets/icon-mobile.png'
import dot from '../../assets/dot.png';

const Works = () => {
    return (
        <>
            <section className="mt-5">
                <div className="works-bg container works-p-b d-flex align-items-center container">
                    <Row>
                        <Col md={6}>
                            <div className="works-begin">
                                <div className="section-title">
                                    <h3>How it works</h3>
                                </div>
                                <div className="section-heading">
                                    <h2>Easy To Begin</h2>
                                </div>
                                <div className="regular-font">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. Sed pulvinar malesuada nunc, non efficitur magna laoreet non. Proin facilisis luctus dictum.
                                    </p>
                                </div>
                                <div><button className="button-round" >Shop Now</button></div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <div className="mt-5 device">
                                        <div className="device-img .d-sm-none .d-md-block">
                                            <img src={dot} alt="dot" />
                                        </div>
                                        <div className="works-bg-inside shadow">
                                            <div className="works-p">
                                                <div className="works-icon"> <img src={mobile} alt="mobile" /></div>
                                                <div>
                                                    <div className="content-text sec-title-third">
                                                        <div className="pt-3">
                                                            <h4>Connect Device</h4>
                                                        </div>
                                                        <p className="regular-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis,</p>
                                                    </div>
                                                </div>
                                                <div className="learn-more">
                                                    <h4>Learn More</h4>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="works-bg-inside mt-5 shadow">
                                            <div className="works-p">
                                                <div className="works-icon"> <img src={mobile} alt="mobile" /></div>
                                                <div>
                                                    <div className="content-text sec-title-third">
                                                        <div className="pt-3">
                                                            <h4>Connect Device</h4>
                                                        </div>
                                                        <p className="regular-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis,</p>
                                                    </div>
                                                </div>
                                                <div className="learn-more">
                                                    <h4>Learn More</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center" md={6} sm={12}>

                                    <div className="works-bg-inside mt-5  shadow">
                                        <div className="works-p">
                                            <div className="works-icon"> <img src={mobile} alt="mobile" /></div>
                                            <div>
                                                <div className="content-text sec-title-third">
                                                    <div className="pt-3">
                                                        <h4>Connect Device</h4>
                                                    </div>
                                                    <p className="regular-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis,</p>
                                                </div>
                                            </div>
                                            <div className="learn-more">
                                                <h4>Learn More</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </div>
                
            </section>
        </>
    );
};

export default Works;