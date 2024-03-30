import { Container, Tab, Tabs, Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';
import Hero from '../components/Hero';

interface TabData {
    label: string;
    content: JSX.Element;
}

const CaseStudy = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const tabs: TabData[] = [
        {
            label: 'Styles',
            content: (
                <>
                    <h2>Styles</h2>
                    <p className="lead">
                        An early step in the design process is to establish the visual style of the project. This can be
                        done by creating a mood board or style tiles. The visual style of the project should be
                        consistent with the brand and target audience. I decided to go with these colors because I
                        thought they fit the vibe of the game.
                    </p>
                    <img src="/styles.png" alt="styles" className="img-fluid" />
                </>
            ),
        },
        {
            label: 'Components',
            content: (
                <>
                    <h2>Components</h2>
                    <p className="lead">
                        Once the visual style is established, the next step is to create the components of the project.
                        This includes buttons, forms, and other interactive elements. I created these components to be
                        reusable and consistent throughout the project.
                    </p>
                    <img src="/components.png" alt="components" className="img-fluid" />
                </>
            ),
        },
        {
            label: 'Mockups',
            content: (
                <>
                    <h2>Mockups</h2>
                    <p className="lead">
                        After the components are created, the next step is to create mockups of the project. This
                        includes wireframes and high-fidelity designs. I created this mockup to show the layout and
                        functionality of the project.
                    </p>
                    <img src="/mockup.png" alt="mockups" className="img-fluid" />
                </>
            ),
        },
        {
            label: 'Development',
            content: (
                <>
                    <h2>Development</h2>
                    <p className="lead">
                        The development phase is where the project comes to life. This is where the components are
                        implemented and the project is built. I used HTML and Sass to build this project. I also used
                        JavaScript to add some interactivity to the project.
                    </p>
                    <div className="text-center">
                        <img src="/development.png" alt="development" className="img-fluid" width={'70%'} />
                    </div>
                </>
            ),
        },
        {
            label: 'Feedback',
            content: (
                <>
                    <h2>Feedback</h2>
                    <p className="lead">
                        After the project is built, it's important to get feedback from users. This can be done through
                        user testing or surveys. I got feedback from users and made changes to the project based on
                        their suggestions. Here are some before and after screenshots of the project.
                    </p>
                    <div className="row">
                        <div className="col col-12 col-md-6">
                            <h3 className="mb-4">Before:</h3>
                            <img src="/feedback-before.png" alt="mockup before" className="img-fluid" />
                        </div>
                        <div className="col col-12 col-md-6">
                            <h3 className="mb-4">After:</h3>
                            <img
                                src="/mockup.png"
                                alt="mockup after with layout and style changes"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            label: 'Launch',
            content: (
                <>
                    <h2>Launch</h2>
                    <p className="lead">
                        The final step in the project is to launch it to the public. This can be done by deploying the
                        project to a server or hosting platform. I deployed this project to Netlify so that it can be
                        accessed by anyone. The project is now live and ready to be used by users.
                    </p>
                    <Spinner
                        animation="border"
                        role="status"
                        variant="primary"
                        style={{ display: iframeLoaded ? 'none' : 'block', margin: '0 auto' }}
                    />
                    <iframe
                        src="https://leagueofrockets.netlify.app/"
                        title="League of Rockets"
                        width="100%"
                        height="800px"
                        onLoad={() => setIframeLoaded(true)}
                        style={{ display: iframeLoaded ? 'block' : 'none' }}
                    ></iframe>
                    <div className="text-center pt-4">
                        <Button variant="primary" href="https://leagueofrockets.netlify.app/" target="_blank">
                            Visit Site
                        </Button>
                    </div>
                </>
            ),
        },
    ];

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="case-study">
                <Hero title="case study" subtitle="league of rockets" />

                <Container maxWidth={'lg'} sx={{ mb: 3 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={currentTab} onChange={handleTabChange} centered>
                            {tabs.map((tab, index) => (
                                <Tab key={index} label={tab.label} />
                            ))}
                        </Tabs>
                    </Box>

                    {/* TabPanel for each step */}
                    {tabs.map((tab, index) => (
                        <div key={index} role="tabpanel" hidden={currentTab !== index}>
                            {currentTab === index && <div className="tab">{tab.content}</div>}
                        </div>
                    ))}
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default CaseStudy;
