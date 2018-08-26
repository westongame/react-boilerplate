import React from 'react';

import css from './Preloader.styl';


const Preloader = (loadingProp) => (WrappedComponent) => {
    return class LoadingHOC extends React.Component {
        isEmpty = (prop) => {
            return (
                prop === null
                || prop === undefined
                || (Object.prototype.hasOwnProperty.call(prop, 'length') && prop.length === 0)
                || (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        };

        render() {
            return (
                this.isEmpty(this.props[loadingProp])
                    ? (
                        <div className={css.root}>
                            Loading...
                        </div>
                    ) : <WrappedComponent {...this.props} />
            );
        }
    };
};

export default Preloader;
