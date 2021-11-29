import React, { Component } from 'react';
import styles from './Footer.module.scss';


class Footer extends Component {
  render() {
    return (
      <div>
        <label><input type="radio" name='lang'/>ENG</label>
        <label><input type="radio" name='lang'/>RU</label>
      </div>
    );
  }
}

export default Footer;
