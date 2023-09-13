import { Link, animateScroll as scroll } from 'react-scroll';
import { MdLanguage } from 'react-icons/md';

function Nav({ setIsEnglish, isEnglish }) {
  return (
    <nav>
      <div className="logo">
        <MdLanguage onClick={() => setIsEnglish((prev) => !prev)} className="langLogo" />
        <button onClick={() => setIsEnglish((prev) => !prev)} className="langBtn">
          {isEnglish ? 'english' : 'русский'}
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" offset={-140} to="projects" smooth={true} duration={1000}>
            {isEnglish ? 'projects' : 'проекты'}
          </Link>
        </li>
        <Link className="nav-link" offset={-70} to="bio" smooth={true} duration={1200}>
          {isEnglish ? 'bio' : 'о себе'}
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
