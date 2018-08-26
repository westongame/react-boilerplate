import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { testAction } from '../../actions/testAction';
import App from '../../components/App/App';


class AppContainer extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        testAction: PropTypes.func.isRequired
    };

    static defaultProps = {
        text: null
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.testAction();
    }

    render() {
        const { text } = this.props;

        return (
            <App
                text={text}
            />
        );
    }
}

const mapStateToProps = ({ test }) => {
    return {
        text: test.text
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => {
            dispatch(testAction());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
