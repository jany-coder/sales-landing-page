import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="section-title">
                            <h3>Frequently Ask Question</h3>
                        </div>
                        <div className="section-heading">
                            <h2>Solve your problem with <br />
                                very faster
                            </h2>
                        </div>
                        <div className="regular-font">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros libero, lacinia eleifend dapibus quis, egestas quis dolor. Sed pulvinar malesuada nunc, non efficitur magna laoreet non. Proin facilisis luctus dictum.
                            </p>
                        </div>

                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;