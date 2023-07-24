import cosmics from './assets/img/cosmic-sounds.jpg';
import rps from './assets/img/rps.jpg';
import product from './assets/img/the-product.jpg';
import steppi from './assets/img/steppi.jpg';
import ag from './assets/img/ag-store.jpg';

import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

export const projects = [
  {
    title: 'Cosmic sounds',
    projectImage: cosmics,
    demoLink: 'https://shimmering-jelly-7b5d69.netlify.app/',
    githubLink: 'https://github.com/xelpix/cosmic-sounds',
    type: 'vanilla',
  },
  {
    title: 'RPS Fighting Game',
    projectImage: rps,
    demoLink: 'https://clever-gingersnap-a4879c.netlify.app/',
    githubLink: 'https://github.com/xelpix/rock-paper-scissors-fighting-game',
    type: 'vanilla',
  },
  {
    title: 'The Product (landing page)',
    projectImage: product,
    demoLink: 'https://dreamy-cheesecake-54f1fe.netlify.app/',
    githubLink: 'https://github.com/xelpix/the-product',
    type: 'react',
  },
  {
    title: 'Steppi',
    projectImage: steppi,
    demoLink: 'https://astonishing-tartufo-677cf2.netlify.app/',
    githubLink: 'https://github.com/xelpix/steppi',
    type: 'react',
  },

  {
    title: 'AG store',
    projectImage: ag,
    demoLink: 'https://imaginative-tulumba-e4c7e3.netlify.app/',
    githubLink: 'https://github.com/xelpix/ancient-gamer-store',
    type: 'react',
  },
];

export const socialLinks = [
  {
    img: <FaTelegramPlane />,
    link: 'https://t.me/ymnicavsetaki',
  },
  {
    img: <FaGithub />,
    link: 'https://github.com/xelpix',
  },
];
