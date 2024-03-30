import Hero from '../components/Hero';
import { Container } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Hero title="portfolio" subtitle="check out some of my work!" />

            <section>
                <h2 className="title">projects</h2>
                <Container maxWidth={'lg'} sx={{ mb: 5 }}>
                    <div className="row py-5">
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img src="/lor.jpg" alt="playstation controller" className="img-fluid" />
                                <div className="card-body">
                                    <h3>league of rockets</h3>
                                    <p className="lh-lg">Informational Site for Rocket League ®</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="league-of-rockets" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://leagueofrockets.netlify.app"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img
                                    src="/dubs-imagery.jpeg"
                                    alt="girls sitting on car on salt flats"
                                    className="img-fluid"
                                />
                                <div className="card-body">
                                    <h3>dubs imagery</h3>
                                    <p className="lh-lg">Site for Photography Business</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="dubs-imagery" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://dubs-imagery.netlify.app"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img src="/snkrs.jpg" alt="jordan 1 shoe" className="img-fluid" />
                                <div className="card-body">
                                    <h3>SNKRS</h3>
                                    <p className="lh-lg">Duplicate Nike SNKRS Website</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="snkrs" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://nikesnkrs.netlify.app"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img src="/the-scoop.jpg" alt="ice cream cone" className="img-fluid" />
                                <div className="card-body">
                                    <h3>the scoop</h3>
                                    <p className="lh-lg">Fictional Ice Cream Parlor</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="the-scoop" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://thescoop.netlify.app/"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img src="/cardeal.jpg" alt="vintage car on road" className="img-fluid" />
                                <div className="card-body">
                                    <h3>cardeal</h3>
                                    <p className="lh-lg">Fictional Car Buying Business</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="cardeal" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://eloquent-twilight-bdc724.netlify.app/"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 py-4 px-5">
                            <div className="portfolio-card">
                                <img
                                    src="/recipes.jpg"
                                    alt="girls sitting on car on salt flats"
                                    className="img-fluid"
                                />
                                <div className="card-body">
                                    <h3>recipes</h3>
                                    <p className="lh-lg">App for Storing Recipes</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="recipes" className="btn btn-light">
                                                more info
                                            </Link>
                                        </div>
                                        <div className="col col-12 col-lg-7">
                                            <Button
                                                variant="light"
                                                href="https://brilliant-capybara-68c83c.netlify.app/"
                                                target="_blank"
                                            >
                                                take me there
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/case-study" className="btn btn-light px-5 py-3">
                            Explore Case Study (League of Rockets)
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Portfolio;
