const initialState = null;

const drawReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DRAW':
            return action.value;
        default:
            return state;
    }
}

export default drawReducer;
