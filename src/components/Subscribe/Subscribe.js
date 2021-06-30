import React from 'react';
import { Container } from 'react-bootstrap';
import './Subscribe.scss';

const Subscribe = () => {
    return (
        <section className="text-center mt-5">
            
                <Container>
                <div className="subscribe-bg">
                    <div className="section-heading">
                        <h2> Subscribe To Our NewsLetter
                        </h2>
                    </div>
                    <div className="regular-font">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br /> fermentum metus ligula, id eleifend quam feugiat
                        </p>
                    </div>

                    <div className="subscribe">
                        <form action="">
                            <input type="email" name="" placeholder="Enter your email address" />
                            <input type="button" name="" value="Subscribe" />
                        </form>

                    </div>
                    <div className="iframe-container mt-3">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/v4p4FiGDMCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                </Container>
            
        </section>
    );
};

export default Subscribe;