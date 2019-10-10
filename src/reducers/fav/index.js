import objectAssign from 'object-assign';

const initialState = {
    fav: [],
};
export default function fav(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_FAV':
        return objectAssign({}, state, {
          fav: [...state.fav,action.data],
        });
      case 'REMOVE_FROM_FAV':
        return objectAssign({}, state, {
          fav: state.fav.filter((fav)=> fav.id !== action.data.id),
        });
      default:
        return state
    }
  }