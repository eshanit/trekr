const INDEX = { path: '/', title: 'Main' };
const LOGIN = { path: '/login', title: 'Login' };
const REGISTER = { path: '/register', title: 'Register' };
const DASHBOARD = { path: '/dashboard', title: 'Dashboard' };

const ALL = [INDEX, LOGIN, REGISTER, DASHBOARD];

export const ALLOWED_PATH_FOR_UNAUTHENTICATED = [INDEX.path, LOGIN.path, REGISTER.path];
export const NOT_ALLOWED_PATH_FOR_AUTHENTICATED = [LOGIN.path];

export function getRouteTitleByPath(path: String) {
    return ALL.find(r => r.path === path)?.title;
  }
  export default {
    INDEX,
    LOGIN,
    DASHBOARD
  };