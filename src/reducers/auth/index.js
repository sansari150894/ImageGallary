import objectAssign from 'object-assign';

const updateOnChange = (state, action) => {
     let form = state[action.data.formType];
     form[action.data.key] = action.data.e.target.value;
     return form;
};

const checkLogin = (users = [] , u) => {
  let found = users.find((user)=>{
    return user.email === u.email && user.password === u.password
  });
  if(found){
    return {
      isLogin: true,
    }
  }else{
    return {
      isLogin: false,
    }
  }
};

let initialState = {
    login: {
        email: '',
        password: '',
    },
    singup: {
        name: '',
        email: '',
        password: '',
    },
    userData: {
        isLogin: false,
    }
};
export default function auth(state = initialState, action) {
    switch (action.type) {
      case 'ON_CHANGE':
        return objectAssign({}, state, {
          [action.data.formType]: updateOnChange(state, action),
        });
      case 'LOGIN':
        let users1 = JSON.parse(window.localStorage.getItem('users'));
        let ud = checkLogin(users1, state.login);
        window.localStorage.setItem('userData', JSON.stringify(ud));
        return objectAssign({}, state, {
          userData: ud,
        });
      case 'SIGNUP':
        let users = JSON.parse(window.localStorage.getItem('users'));
        users.push(state.singup);
        window.localStorage.setItem('users', JSON.stringify(users));
        return objectAssign({}, state, {

        });
      default:
        return state
    }
  }