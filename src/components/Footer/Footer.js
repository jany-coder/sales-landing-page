import React from 'react';
import './Footer.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import shapeOne from "../../assets/footer-shape-01.png";
import shapeTwo from "../../assets/footer-shape-02.png";

const Footer = () => {

    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <section className="mt-5 footer-bg footer-container" >
            <div className="footer-p-t ">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footer-style">
                                <h3>Product</h3>
                                <div className="mt-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit. Proin vitae interdum massa. Aenean vehicula turpis sit amet porttitor facilisis.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-style">
                                <h3>Product</h3>
                                <div className="mt-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur elit. Proin vitae interdum massa. Aenean vehicula turpis sit amet porttitor facilisis.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-style">
                                <h3>Useful Links</h3>
                                <div className="mt-5">
                                    <Row>
                                        <Col>
                                            <p>About</p>
                                            <p>Pricing</p>
                                            <p>Gift Cards</p>
                                            <p>FAQ</p>
                                        </Col>
                                        <Col>
                                            <p>Contact</p>
                                            <p>Appointment</p>
                                            <p>Privacy Policy</p>
                                            <p>Terms and Use</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-style">
                                <h3>Newsletters</h3>
                                <div className="mt-5">
                                    <input type="mail" placeholder="Enter Your Mail" />
                                    <span>{rightArrow}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="line"></hr>

                    <div className="copyright">
                        <small>Copyright&copy; 2021 product, All Rights Reserved</small>
                    </div>
                </Container>
                <div className="shape-one">
                     <img src={shapeOne} alt="shape" />
                </div>
                <div className="shape-two">
                     <img src={shapeTwo} alt="shape" />
                </div>
            </div>
        </section>
    );
};

export default Footer;