import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = (props) =>
  <button className={style.btn}>{props.text}</button>;

Button.propTypes = {
  text: PropTypes.string,
  isHaide: PropTypes.bool,
};
