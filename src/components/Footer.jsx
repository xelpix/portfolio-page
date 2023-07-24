import { socialLinks } from '../data';

function Footer() {
  return (
    <footer>
      {socialLinks.map((link, i) => {
        return (
          <a href={link.link} target="_blank" className="social-link" key={i}>
            {link.img}
          </a>
        );
      })}
      <div className="copyrights">&copy; 2023 All Rights Reserved.</div>
    </footer>
  );
}
export default Footer;
