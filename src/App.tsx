import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Root from './pages/Root';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Details from './pages/Details';
import CaseStudy from './pages/CaseStudy';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#a4bfdb',
            },
            secondary: {
                main: '#292e34',
            },
        },
    });

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'portfolio',
                    children: [
                        {
                            index: true,
                            element: <Portfolio />,
                        },
                        {
                            path: ':pageId',
                            element: <Details />,
                        },
                    ],
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'case-study',
                    element: <CaseStudy />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
