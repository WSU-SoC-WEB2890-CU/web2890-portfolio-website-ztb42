import { Container, TextField } from '@mui/material';
import Hero from '../components/Hero';
import { Button, Form } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about">
            <Hero title="about me" />

            <Container maxWidth={'lg'} sx={{ mb: 5 }}>
                <h2 className="title mb-5">the story so far...</h2>

                <div className="image">
                    <div className="img-border">
                        <img src="/about-me.jpg" alt="About Us" className="image" />
                    </div>
                </div>

                <h3>background</h3>
                <p>
                    My name is Zackary Byington. I was born in Layton, Utah on August of 2001. I lived in Roy, Utah
                    until 1st grade, then moved to West Haven just a couple miles away. I've always been technologically
                    savvy and I am glad to say I have not changed my major too many times in realizing that coding was
                    what I wanted to do in the future.
                </p>

                <h3>education</h3>
                <p>
                    I started coding during my sophomore year of high school. I was in a program called "Project Lead
                    the Way", which was a STEM program that focused on engineering. I took a "Principles of Engineering"
                    class my freshman year of high school and I enjoyed it enough that I was planning on continuing in
                    that field until I heard about a new program that was starting up called Interactive Computer Arts
                    (ICA). That sounded really interesting so I took an ICA class the next year, which just ended up
                    being CS 1010. After that, Computer Science was my focus and I made it my top priority. I took more
                    CS classes throughout the rest of my high school years and continued to enjoy it.
                </p>
                <p>
                    When I started college at Weber State University, my plan was to continue in the Computer Science
                    program. I worked through several of my general education classes and started to take CS courses
                    again. The first CS classes I took at Weber State were CS 2350 and CS 2550. I thoroughly enjoyed my
                    time in Cs 2350 especially and I decided to look into the Web UX Major where I would get a more
                    focused look into web design. It sounded exciting and quite promising and I am currently in my first
                    semester as a Web student. I'd like to think it's going pretty well. I plan to continue the program
                    until I get my Bachelor's degree.
                </p>

                <h3>experience</h3>
                <p>
                    I have experience working with several coding languages, with most of my experience being in Java,
                    Python, HTMl/CSS/Javascript, SQL, and React. I also have experience working in tech support for over
                    a year now. I worked at the Weber State IT Service Desk for a year and a half and I enjoy helping
                    people learn more about how computers function in that aspect. It has especially helped me learn the
                    "ins and outs" of multiple operating systems and I have become proficient in working with Mac and
                    Windows both. I have also worked with several Linux distros. Now I am working for a couple
                    professors in a development team as a web developer. I'm sure I will continue to get better at
                    programming and working on the backend of things as my time goes on, and I look forward to it.
                </p>

                <h3>skills</h3>
                <p>
                    Many of the other skills I have developed have come as a result of my childhood and my serving a
                    mission for the Church of Jesus Christ of Latter-Day Saints. I spent two years serving others in the
                    Kansas City area and I learned quite a bit about myself and how to work with other people. I have
                    never had an issue with social interaction and I think I'm very proficient in working with others.
                    It is not often that I have a rough time getting along with others and making friends. Another thing
                    I learned from my mission was hard work. We were up early every day and working late and it taught
                    me a lot in that aspect. As a missionary, I lived with another person my age and spent all day with
                    them as well. It really taught me patience and I can tell that patience has translated into my
                    working with others since I have been home.
                </p>

                <h3>hobbies</h3>
                <p>
                    During my free time, I like to play video games, watch movies and TV shows, and spend time with
                    friends and family. I play a lot of games with friends that I met at my current job and it has been
                    a lot of fun. I built a PC in the summer of 2022 with my friends which was also a big learning
                    experience for me. I have never worked with hardware too much so that was very cool. I have also
                    been able to troubleshoot some issues on my PC since then which I think is fun. I also love music
                    and I spend a lot of my time listening to music while I'm doing other things. I like most types of
                    music and I listen to many genres, such as rap, R&B, sad pop, lofi, and country. I play the piano,
                    which has always been a good outlet for me when I'm struggling with things. Music just speaks to me
                    and helps me to cope with everything going on in life.
                </p>
            </Container>

            <Container maxWidth={'xl'} className="my-5">
                <h2 className="title">contact me</h2>
                <div className="contact row">
                    <Form className="col col-12 col-lg-6">
                        <div className="form text-center">
                            <h3 className="mb-4">send me a message</h3>
                            <TextField
                                label="name"
                                variant="outlined"
                                className="mb-3"
                                size="small"
                                color="secondary"
                            />
                            <TextField
                                label="phone"
                                variant="outlined"
                                className="mb-3"
                                size="small"
                                color="secondary"
                            />
                            <TextField
                                label="email"
                                variant="outlined"
                                className="mb-3"
                                size="small"
                                color="secondary"
                            />
                            <TextField
                                label="message"
                                variant="outlined"
                                multiline
                                rows={5}
                                size="small"
                                color="secondary"
                            />
                            <Button variant="secondary" className="mt-3 px-5">
                                send
                            </Button>
                        </div>
                    </Form>
                    <div className="info col col-12 col-lg-6">
                        <h3>contact me yourself</h3>
                        <p className="lead">i would love to chat with you!</p>
                        <div className="content">
                            <p>
                                email:
                                <br />
                                <a href="mailto:zackarybyington@weber.edu">zackarybyington@weber.edu</a>
                            </p>
                            <p>
                                phone:
                                <br />
                                <a href="tel:801-389-3753">801-389-3753</a>
                            </p>
                            <p>
                                services offered:
                                <br />
                                <span>web design, graphic design, comic relief</span>
                            </p>
                        </div>
                        <p className="lead end">feel free to message me anytime!</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
