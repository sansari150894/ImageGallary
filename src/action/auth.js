
const signupActionCreator = (data) => {
    return {
      type: 'SIGNUP',
      data
    }
};
const loginActionCreator = (data) => {
    return {
        type: 'LOGIN',
        data
    }
};

const onChangeActionCreator = (data) => {
    return {
        type: 'ON_CHANGE',
        data
    }
};

export {
    loginActionCreator,
    signupActionCreator,
    onChangeActionCreator,
};
  