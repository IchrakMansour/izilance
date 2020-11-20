import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProps } from '../prop-types/ReducerProps';

const BasicNotification = ({
  color, title, message, theme,
}) => (
  <div className={`notification notification--${color} notification--${theme.className}`}>
    <h5 className="notification__title bold-text">{title}</h5>
    <p className="notification__message">{message}</p>
  </div>
);

BasicNotification.propTypes = {
  theme: ThemeProps.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

BasicNotification.defaultProps = {
  color: '',
  title: '',
};

const ImageNotification = ({
  img, title, message, theme,
}) => (
  <div className={`notification notification--image notification--${theme.className}`}>
    <div className="notification__image">
      <img src={img} alt="" />
    </div>
    <h5 className="notification__title bold-text">{title}</h5>
    <p className="notification__message">{message}</p>
  </div>
);

ImageNotification.propTypes = {
  theme: ThemeProps.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

ImageNotification.defaultProps = {
  title: '',
};

const FullWideNotification = ({ color, message }) => (
  <div className={`notification notification--full-wide notification--${color}`}>
    <p className="notification__message">{message}</p>
  </div>
);

FullWideNotification.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
};

FullWideNotification.defaultProps = {
  color: '',
};

export {
  BasicNotification,
  ImageNotification,
  FullWideNotification,
};
