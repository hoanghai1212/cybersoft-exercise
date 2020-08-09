import React, { Component } from 'react'
import classes from './Body.module.scss'

import burger from '../../assets/img/burger.png'
import theatre from '../../assets/img/Theatre.png'
import form from '../../assets/img/form.png'

export default class Body extends Component {
    render() {
        return (
            <div className={classes.Body}>
                <img className={classes.Burger} src={burger} alt="burger"/>
                <img className={classes.Theatre} src={theatre} alt="theatre"/>
                <img className={classes.Form} src={form} alt="form"/>
            </div>
        )
    }
}
