import { Link, animateScroll as scroll } from 'react-scroll';

function Nav() {
  return (
    <nav>
      <div className="logo">
        <h2>myLogo</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" offset={-140} to="projects" smooth={true} duration={1000}>
            projects
          </Link>
        </li>
        <Link className="nav-link" offset={-70} to="bio" smooth={true} duration={1200}>
          <li>bio</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
