import { connect } from 'react-redux';
import Home from './Home';
import { fetchImagesActionCreator } from '../../action/home';

const mapStateToProps = ({home}) => ({
  images: home.images,
});
const mapDispatchToProps = dispatch => ({
    fetchImage: (data) => {
      dispatch(fetchImagesActionCreator(data));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
