type HeroProps = {
    title: string;
    subtitle?: string;
};

const Hero = (props: HeroProps) => {
    return (
        <div className="hero">
            <div className="overlay">
                <h1 className="hero-title">{props.title}</h1>
                <p className="hero-subtitle">{props.subtitle}</p>
            </div>
        </div>
    );
};

export default Hero;
