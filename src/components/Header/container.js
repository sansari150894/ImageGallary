import { connect } from 'react-redux';
import Header from './Header';
const mapStateToProps = ({home}) => ({
});
const mapDispatchToProps = dispatch => ({
    fetchImage: () => {
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
