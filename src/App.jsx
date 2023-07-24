import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Tools from './components/Tools';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="app-wrapper">
        <Nav />
        <div data-aos="fade-up">
          <Header />
        </div>
        <div data-aos="fade-up">
          <Tools />
        </div>
        <div id="projects" data-aos="fade-up">
          <Projects />
        </div>
        <div id="bio" data-aos="fade-up">
          <Bio />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
