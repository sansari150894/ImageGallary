import ENDSPOINT from '../constant/ApiEndpoint';
const setImages = (data) => {
    return {
      type: 'SET_IMAGES',
      data
    }
};
const fetchImagesActionCreator = ({pageNumber}) => {
    let endPoint = ENDSPOINT.FETCH_IMAGE.url(pageNumber);
    return (dispatch) => {
        fetch(endPoint)
        .then(data => data.json())
        .then(data =>{
            dispatch(setImages(data));
        })
    }
};
const addToFavActionCreator = (data) => {
    return {
        type: 'ADD_TO_FAV',
        data
    }
};

export {
    fetchImagesActionCreator,
    addToFavActionCreator,
};
  