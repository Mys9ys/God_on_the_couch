
const MAP_SCALE = 'MAP_SCALE';

let initialState = {
    scale: 2
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAP_SCALE: {
            return {
                ...state,scale: action.scale
            };
        }
        default:
            return state;
    }
}

export const setMapScale = (scale) => ({type: MAP_SCALE,scale});



export default mapReducer