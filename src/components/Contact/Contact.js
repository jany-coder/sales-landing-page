import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';

const Contact = () => {

    const user = <FontAwesomeIcon icon={faUser} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const edit = <FontAwesomeIcon icon={faEdit} />
    return (
        <section id="contact" className="mt-5">
            <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <div className="section-title">
                            <h3>Frequently Ask Question</h3>
                        </div>
                        <div className="section-heading">
                            <h2>Solve your problem with <br />
                                very faster
                            </h2>
                        </div>
                        <div className="regular-font">
                            <div className="contact-p">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget interdum odio, nec scelerisque libero.
                                </p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. Sed pulvinar malesuada nunc, non efficitur magna laoreet non. Proin facilisis luctus dictum.
                            </p>
                        </div>

                    </Col>
                    <Col md={5}>
                        <div className="wrapper">
                            <div class="title">
                                Get A Free Quote
                            </div>
                            <div className="form">
                                <div className="input_field">
                                    <input className="input" type="text" name="" placeholder="Name" id="" />
                                    <span>{user}</span>
                                </div>

                                <div className="input_field">
                                    <input className="input" type="email" name="" placeholder="Email" id="" />
                                    <span>{mail}</span>
                                </div>

                                <div className="input_field">
                                    <textarea name="" id="" placeholder="Enter Your Message" cols="30" rows="10"></textarea>
                                    <span>{edit}</span>
                                </div>

                                <div class="btn">
                                    <a href="#">Get In Touch</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;