import React from 'react';
import './Gallery.scss';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/gallery-01.png';
import img2 from '../../assets/gallery-02.png';
import img3 from '../../assets/gallery-03.png';
import img4 from '../../assets/gallery-04.png';
import img5 from '../../assets/gallery-05.png';

const Gallery = () => {
    return (
        <section id="product" className="text-center mt-5">
            <Container >

                <div className="gallery-image-bg">
                    <div className="section-title">
                        <h3>Our Gallery</h3>
                    </div>
                    <div className="section-heading-customize">
                        <h2> Here Is Some Of Our Gallery
                        </h2>
                    </div>
                    <div className="regular-font">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br /> fermentum metus ligula, id eleifend quam feugiat
                        </p>
                    </div>

                    <div>
                        <Row>
                            <Col md={4}>
                                <div className="margin-bottom">
                                    <img className="width-img" src={img1} alt="img1" />
                                </div>
                                <div className="mb-4">
                                    <img className="width-img" src={img2} alt="img1" />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-4">
                                    <img className="width-img" src={img3} alt="img1" />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="margin-bottom">
                                    <img className="width-img" src={img4} alt="img1" />
                                </div>
                                <div className="mb-4">
                                    <img className="width-img" src={img5} alt="img1" />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Gallery;