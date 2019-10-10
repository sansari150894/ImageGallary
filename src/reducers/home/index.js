import objectAssign from 'object-assign';

const initialState = {
    images: [],
};
export default function home(state = initialState, action) {
    switch (action.type) {
      case 'SET_IMAGES':
        return objectAssign({}, state, {
          images: action.data,
        });
      default:
        return state
    }
  }