import { connect } from 'react-redux';
import ImageDetails from './ImageDetails';
import { addToFavActionCreator, removeFromFavActionCreator } from '../../action/fav';

const mapStateToProps = ({fav}) => ({
});
const mapDispatchToProps = dispatch => ({
    addToFav: (data) => {
      dispatch(addToFavActionCreator(data));
    },
    removeFromFav: (data) => {
      dispatch(removeFromFavActionCreator(data));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetails);
