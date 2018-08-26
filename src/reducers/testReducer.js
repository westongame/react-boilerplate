export default function test(state = {}, action) {
    if (action.type === 'TEST_ACTION') {
        const data = action.payload;

        return Object.assign({}, state, {
            text: data
        });
    }

    return state;
}
