import { useState, useRef } from 'react';
import 'normalize.css';
import reactLogo from './assets/react.svg';
import profile from './assets/squareMe.jpg'
import viteLogo from '/vite.svg';
import concentration from './assets/concentration.png';
import ufund from './assets/ufund.png';
import github from './assets/github.png';
import linkedIn from './assets/LinkedIn_icon.svg.webp';
import './App.css';
import { Navbar, Nav, NavItem, Collapse, NavbarToggler, NavLink } from 'reactstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutMe = useRef(null);
  const projects = useRef(null);
  const contactInfo = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop-75,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar className="navbar" alt="Navigation Bar" style={{position: "fixed", top: "0px", width: "100%", height: "60px"}}  expand="sm">
        <NavbarToggler onClick={() => {setIsOpen(!isOpen)}} />
        <Collapse className="collapse" isOpen={isOpen} navbar>
          <Nav className= "me-auto" navbar>
            <NavItem alt="About Me" onClick={() => scrollToSection(aboutMe)}><NavLink className="navLink">About Me</NavLink></NavItem>
            <NavItem alt="Projects" onClick={() => scrollToSection(projects)}><NavLink className="navLink">Projects</NavLink></NavItem>
            <NavItem alt="Contact Info" onClick={() => scrollToSection(contactInfo)}><NavLink className="navLink">Contact Info</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="container main">
        {/* The profile picture on left side, about me and other sections on righ */}
        <div className="flexContainer">
          <div className="profile">
            <img className="profilePic" src={profile} />
            <div style={{fontSize: "xxx-large"}}>Aaron Cheng</div>
            <div style={{fontSize: "x-large"}}>3rd year Software Engineering Major at RIT</div>
          </div>

          <div className="text">
            <h1 alt="Start of About Me section" ref={aboutMe}>About Me</h1>



            <div>
              <div>
                <p>
                  An aspiring software engineer with an interest in full stack development.
                </p>
                <p>
                  I have been coding ever since middle school computer class with block code in scratch, and continued on as a software engineering major at Brooklyn Tech, learning object oriented programming, cybersecurity, and big data. Now I attend Rochester Institute of Technology, also as a software engineering major, where I learn software design, full stack development, C (with all the pointers stuff), and much more.
                </p>
                <p>
                  In my free time, I enjoy playing basketball in the gym and with my friends, helping and hanging out with my church community, and doing all things pokemon. I also like to learn languages, being able to speak four languages: English, Cantonese, Mandarin, and Spanish, and I do my own haircuts (self taught though).
                </p>

              </div>


              <img />
              
            </div>
            

            <h1 alt="Start of Project section" ref={projects}>Projects</h1>

            <div>
              <div className="project">
                <h4>
                  U-Fund Manager Project
                </h4>
                <img className="projectPic" src={ufund}/>
                <br />
                <br />
                <ul>
                  <li>Worked in a team of 6 as a Scrum manager to create an Angular web app where organizations can share their different funding needs and users can choose which need they would like to contribute to. </li>
                  <li>Used SpringBoot framework for the backend to handle HTTPs requests and call the backend’s methods in order to maintain funding needs in users’ cart and the selection of available needs, both stored in JSON files.</li>
                  <li>Did the design for the project and documented it with a domain model and diagrams for architecture, classes, and sequences to help explain how the project works and the choices we made in the design.</li>
                  <li>Used Agile Scrum methodology for our software development life cycle throughout the development process to work together effectively and efficiently as a team to deliver the project with a size of 362 functions.</li>
                </ul>
                
              </div>

              {/* Procon future company name */}
              <div className="project">
                <div>
                  <h4>Concentration Game</h4>
                  <a style={{color: "white"}} href="https://github.com/aarontcheng/Concentration-Game">https://github.com/aarontcheng/Concentration-Game</a>
                  
                </div>
                <br/>
                
                <img className="projectPic" src={concentration}/>
                <br />
                <br />
                <ul>
                  <li>Created a matching card game with a size of 72 functions where players flip two poker cards per turn to reveal which card they are and try to match the cards with the same color and number. </li>
                  <li>Used class component React.js and css to create the single page application.</li>
                  <li>Implemented login/out with name and password through react’s Modal to take in user input, which then makes a request to a REST Flask server to authenticate the credentials and send back a token, if authentication was successful, that the react app can use to send POST requests to update that user’s fastest time. </li>
                  <li>Displayed leaderboard using a GET request to get the top 10 times from the PostgreSQL database. </li>
                  <li>Stored user data in a JSON file and used Python’s JSON library to read/write to the file. </li>
                </ul>
              </div>

            </div>
            

            <h1 alt="Start of Contact Info section" ref={contactInfo}>Contact Info</h1>

            <div className="contacts" style={{display: "flex", flexDirection: "row"}}>
              <a href="https://github.com/aarontcheng"><img alt="github link" src={github}/></a>
              <a href="https://www.linkedin.com/in/aaron-cheng-78a562311/"><img alt="linkedIn link" src={linkedIn}/></a>
            </div>
            <br/>
            <p>aaronchengwork24@gmail.com</p>
          </div>

        </div>
        

        

      </div>

      
    </>
  )
}

export default App
