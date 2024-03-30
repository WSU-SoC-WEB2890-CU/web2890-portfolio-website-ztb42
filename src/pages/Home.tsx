import Hero from '../components/Hero';
import { Container } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CodeIcon from '@mui/icons-material/Code';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Hero title="zackary byington" subtitle="web developer" />

            <Container maxWidth={'lg'} sx={{ mb: 5 }}>
                <section className="qualities">
                    <h2 className="title">who am i?</h2>
                    <p className="subtitle">
                        here’s a sneak peek <br /> into what i’m good at!
                    </p>

                    <div className="row home-card">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4">
                            <div className="home-content">
                                <TipsAndUpdatesIcon fontSize="large" />
                                <h3 className="display-3--title mt-1 py-1">critical thinking</h3>
                                <p className="lh-lg">
                                    I enjoy tackling tough challenges and finding smart solutions. I like to keep
                                    learning so that I can be a sharp thinker and handle anything that comes my way.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4 text-end">
                            <div className="home-pic">
                                <img
                                    src="/critical-thinking.png"
                                    alt="thinking on snail illustration"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row home-card">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4 text-start">
                            <div className="home-pic">
                                <img
                                    src="/problem-solving.png"
                                    alt="web development illustration"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4">
                            <div className="home-content">
                                <CodeIcon fontSize="large" />
                                <h3 className="display-3--title mt-1 py-1">problem solving</h3>
                                <p className="lh-lg">
                                    After working in the industry for a few years, I have learned quite a bit about how
                                    to fix issues and bugs throughout the development process. I imagine I will continue
                                    to learn more and improve at solving issues like this.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row home-card">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4">
                            <div className="home-content">
                                <Diversity3Icon fontSize="large" />
                                <h3 className="display-3--title mt-1 py-1">team player</h3>
                                <p className="lh-lg">
                                    I'm good at listening, sharing ideas, and supporting my team to reach our goals.
                                    Whether I'm leading the way or part of the group, I bring a positive vibe that helps
                                    us work well together and get stuff done!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section mt-4 text-end">
                            <div className="home-pic">
                                <img src="/team-player.png" alt="cloud hosting illustration" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

            <section className="work">
                <h2 className="title">latest work</h2>
                <Container maxWidth={'lg'}>
                    <div className="row py-5">
                        <div className="col col-12 col-md-6 py-3 px-5">
                            <div className="work-card">
                                <img src="/lor.jpg" alt="playstation controller" className="img-fluid" />
                                <div className="card-body">
                                    <h3>league of rockets</h3>
                                    <p className="lh-lg">Informational Site for Rocket League ®</p>
                                    <div className="row">
                                        <div className="col col-12 col-lg-5">
                                            <Link to="/portfolio/league-of-rockets" className="btn btn-light">
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
                        <div className="col col-12 col-md-6 py-3 px-5">
                            <div className="work-card">
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
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;
