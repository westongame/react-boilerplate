import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route
} from 'react-router-dom';

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

                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => (
                            <Fragment>
                                <div className={css.text}>
                                    {text}
                                </div>
                                <img
                                    className={css.image}
                                    src={image}
                                    alt=''
                                />
                            </Fragment>
                        )}
                    />
                    <Route
                        path='/routing-test'
                        render={() => (
                            <div>
                                Routing test
                            </div>
                        )}
                    />
                </Switch>
            </div>
        </div>
    );
};

App.propTypes = {
    text: PropTypes.string.isRequired
};

export default Preloader('text')(App);
