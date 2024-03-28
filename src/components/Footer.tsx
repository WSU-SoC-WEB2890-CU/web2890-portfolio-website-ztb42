import { LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="overlay">
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/zackary-byington/" target="_blank">
                        <LinkedIn sx={{ fontSize: 50 }} />
                    </a>
                    <a href="https://github.com/ztb42" target="_blank">
                        <GitHub sx={{ fontSize: 50 }} />
                    </a>
                </div>
                <p>zackary byington | 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
