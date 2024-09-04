import Cookies from 'js-cookie';

export const setLoginState = (isLoggedIn: boo) => {
  Cookies.set('isLoggedIn', isLoggedIn);
};

export const getLoginState = () => {
  return Cookies.get('isLoggedIn') === 'true';
};