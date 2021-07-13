import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavHeader from '../NavHeader/NavHeader';
import '../../styles/shared/button.scss';
import './Header.scss';
import lock from '../../assets/smart-lock.png';
import '../../styles/shared/fonts-definition.scss';

const Header = () => {
    return (
        <>
            <div className="header-bg-rect">
                <section >
                    <NavHeader></NavHeader>
                </section>
                <section>
                    <div className="padding-header">
                        <Container>
                            <Row>
                                <Col md={6}>
                                    <div className="header-text">
                                        <h1>Smart <br />Bicycle Lock</h1>
                                    </div>
                                    <div className="roboto-regular">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra diam non blandit volutpa</p>
                                    </div>
                                    <div><button className="button-round" >Shop Now</button></div>
                                </Col>
                                <Col md={5}>
                                    <img className="img-lock" src={lock} alt="img-lock" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Header;