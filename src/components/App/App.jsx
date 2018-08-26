import React from 'react';
import PropTypes from 'prop-types';

import Preloader from '../Preloader/Preloader';

import image from '../../assets/img/mw.jpg';
import css from './App.styl';


const App = (props) => {
    const { text } = props;

    return (
        <div className={css.root}>
            <div className={css.container}>
                <div className={css.title}>
                    Westongame React Boilerplate
                </div>
                <div className={css.text}>
                    {text}
                </div>
                <img
                    className={css.image}
                    src={image}
                    alt=''
                />
            </div>
        </div>
    );
};

App.propTypes = {
    text: PropTypes.string.isRequired
};

export default Preloader('text')(App);
