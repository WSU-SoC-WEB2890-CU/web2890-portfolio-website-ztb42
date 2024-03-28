import Hero from '../components/Hero';
import { Container } from '@mui/material';

const Home = () => {
    return (
        <div className="home">
            <Hero title="zackary byington" subtitle="web developer" />

            <Container maxWidth={'md'} sx={{ mb: 5 }}>
                <div className="text-center">
                    <h2 className="title">who am i?</h2>
                </div>
            </Container>
        </div>
    );
};

export default Home;
