import { connect } from 'react-redux';
import { signupActionCreator, loginActionCreator, onChangeActionCreator} from '../../action/auth';
import Auth from './Auth';

const mapStateToProps = () => ({
});
const mapDispatchToProps = dispatch => ({
    singup: (data) => {
      dispatch(signupActionCreator(data));
    },
    login: (data) => {
        dispatch(loginActionCreator(data));
    },
    onChange: (data) => {
        dispatch(onChangeActionCreator(data)); 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
