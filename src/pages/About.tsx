import { Container } from '@mui/material';
import Hero from '../components/Hero';

const About = () => {
    return (
        <div className="about">
            <Hero title="about me" />

            <Container maxWidth={'md'} sx={{ mb: 5 }}>
                <div className="text-center">
                    <h2 className="title">the story so far...</h2>
                    <div className="image">
                        <div className="img-border">
                            <img src="/about-me.jpg" alt="About Us" className="image" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
