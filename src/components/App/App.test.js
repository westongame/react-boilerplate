import React from 'react';
import { shallow } from 'enzyme';

import App from './App';


const setup = (propsOverrides) => {
    const props = Object.assign({}, propsOverrides);

    const wrapper = shallow(<App {...props} />);

    return {
        props,
        wrapper
    };
};

describe('App', () => {
    it('should render self', () => {
        const { wrapper } = setup();

        expect(wrapper.exists()).toBe(true);
    });
});
