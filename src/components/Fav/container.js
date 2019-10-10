import { connect } from 'react-redux';
import Fav from './Fav';

const mapStateToProps = ({fav}) => ({
  fav: fav.fav,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
