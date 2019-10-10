
const addToFavActionCreator = (data) => {
    return {
        type: 'ADD_TO_FAV',
        data
    }
};


const removeFromFavActionCreator = (data) => {
    return {
        type: 'REMOVE_FROM_FAV',
        data
    }
};

export {
    addToFavActionCreator,
    removeFromFavActionCreator,
};
  