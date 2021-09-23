import React from 'react';
import classes from './Header.module.css';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table full of food"/>
            </div>
        </Fragment>
    )
}

export default Header