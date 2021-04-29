import apiEndpoint from './config';

export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request(apiEndpoint + '/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem('auth', auth.tokens.access.token);
        localStorage.setItem('username', auth.user.username);
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
