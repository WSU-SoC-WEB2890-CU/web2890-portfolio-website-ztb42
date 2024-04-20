import { Container } from '@mui/material';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

interface Page {
    id: string;
    title: string;
    description?: string;
    externalLink?: string;
    codingLanguage?: string;
    caseStudy?: boolean;
}

const pages: Page[] = [
    {
        id: 'league-of-rockets',
        title: 'league of rockets',
        description: 'Informational site for Rocket League® where you can view details about the game.',
        externalLink: 'https://leagueofrockets.netlify.app',
        codingLanguage: 'HTML / CSS / Sass / JavaScript',
        caseStudy: true,
    },
    {
        id: 'dubs-imagery',
        title: 'dubs imagery',
        description: 'Photography portfolio site where you can view photos and contact the photographer.',
        externalLink: 'https://dubs-imagery.netlify.app',
        codingLanguage: 'React / CSS / Sass',
    },
    {
        id: 'snkrs',
        title: 'SNKRS',
        description:
            'Fictional sneaker store where you can view details about sneakers. Duplicate site of https://www.nike.com/launch.',
        externalLink: 'https://nikesnkrs.netlify.app',
        codingLanguage: 'React / CSS',
    },
    {
        id: 'the-scoop',
        title: 'the scoop',
        description: 'Fictional ice cream parlor website where you can view flavors and leave a review.',
        externalLink: 'https://thescoop.netlify.app/',
        codingLanguage: 'HTML / CSS / JavaScript',
    },
    {
        id: 'cardeal',
        title: 'cardeal',
        description: 'Fictional car buying site where you can contact the company and view past purcahses.',
        externalLink: 'https://eloquent-twilight-bdc724.netlify.app',
        codingLanguage: 'HTML / CSS / JavaScript',
    },
    {
        id: 'recipes',
        title: 'recipes',
        description: 'Recipe site where you can view recipes and add your own.',
        externalLink: 'https://brilliant-capybara-68c83c.netlify.app',
        codingLanguage: 'React / CSS',
    },
];

const Details = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const { pageId } = useParams<{ pageId: string }>();
    const page = pages.find((page) => page.id === pageId);

    if (!page) {
        return <div>Page not found</div>;
    }

    if (page) {
        return (
            <>
                <h1 className="title">{page.title}</h1>
                <Container className="details" sx={{ mb: '3rem' }}>
                    <p className="lead my-5">{page.description}</p>
                    <iframe
                        src={page.externalLink}
                        title={page.title}
                        width="100%"
                        height="800px"
                        onLoad={() => setIframeLoaded(true)}
                        style={{ display: iframeLoaded ? 'block' : 'none' }}
                    ></iframe>
                    <Spinner
                        animation="border"
                        role="status"
                        variant="primary"
                        style={{ display: iframeLoaded ? 'none' : 'block', margin: '0 auto' }}
                    />
                    <div className="row">
                        <p className="col col-6 my-5">
                            <strong>Coding Language: </strong> {page.codingLanguage}
                        </p>
                        <div className="col col-6 my-5 text-end">
                            <Button variant="light" href={page.externalLink} target="_blank">
                                View Site
                            </Button>
                        </div>
                    </div>
                    {page.caseStudy ? (
                        <div className="text-center">
                            <Link to="/case-study" className="btn btn-light px-5 py-3">
                                Explore Case Study
                            </Link>
                        </div>
                    ) : null}
                </Container>
            </>
        );
    }
};

export default Details;
