import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import service from '../../assets/service.png';
import './Service.scss';
import '../../styles/shared/fonts-definition.scss'

const Service = () => {
    return (
        <>
            <section id="service" className="mt-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="omni-cycling">
                                <img src={service} style={{ width: "100%" }} alt="service.png" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-title">
                                <h3>Why Choose Us</h3>
                            </div>
                            <div className="section-heading">
                                <h2>We Provide Smart & <br />
                                    Digital Services.
                                </h2>
                            </div>
                            <div className="regular-font">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. Sed pulvinar malesuada nunc, non efficitur magna laoreet non. Proin facilisis luctus dictum.
                                </p>
                            </div>

                            <div>
                                <div className="content-service">
                                    <div className="content-text sec-title-third">
                                        <h4>Bluetooth Connection</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </p>
                                    </div>
                                </div>

                                <div className="content-service">
                                    <div className="content-text sec-title-third">
                                        <h4>USB Rechargeable</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </p>
                                    </div>
                                </div>

                                <div className="content-service">
                                    <div className="content-text sec-title-third">
                                        <h4>Ultra-Long Standby</h4>
                                        <p className="regular-font">orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Service;