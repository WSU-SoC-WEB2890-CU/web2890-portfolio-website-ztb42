import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Root from './pages/Root';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#a4bfdb',
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
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'portfolio',
                    element: <Contact />,
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
