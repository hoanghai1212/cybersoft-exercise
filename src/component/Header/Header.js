import React, { Component } from "react";
import classes from './Header.module.scss'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={classes.Header__Title}>Cybersoft Exercise - FE44</h1>
      </header>
    );
  }
}
