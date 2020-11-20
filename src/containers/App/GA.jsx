import ReactGA from 'react-ga';

const GA = () => {
  ReactGA.initialize('UA-139591409-1');
  ReactGA.pageview('/');
};

export default GA;
