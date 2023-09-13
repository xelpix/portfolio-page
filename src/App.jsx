import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Tools from './components/Tools';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="app-wrapper">
        <Nav isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div data-aos="fade-up">
          <Header isEnglish={isEnglish} />
        </div>
        <div data-aos="fade-up">
          <Tools isEnglish={isEnglish} />
        </div>
        <div id="projects" data-aos="fade-up">
          <Projects isEnglish={isEnglish} />
        </div>
        <div id="bio" data-aos="fade-up">
          <Bio isEnglish={isEnglish} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
