import Cookies from 'js-cookie';

// export const setLoginState = (isLoggedIn: any) => {
//   Cookies.set('isLoggedIn', isLoggedIn);
// };

// export const getLoginState = () => {
//   return Cookies.get('isLoggedIn') === 'true';
// };


export const setLoginState = (isLoggedIn: boolean) => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
};

export const getLoginState = () => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    return storedLoginState ? JSON.parse(storedLoginState) : false;
};