import { fakeXHR } from '../helpers';


export const testAction = () => (dispatch) => {
    fakeXHR('get', '{ Hi! }').then((data) => {
        dispatch({
            type: 'TEST_ACTION',
            payload: data
        });
    });
};
