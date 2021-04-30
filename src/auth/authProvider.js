import apiEndpoint from '../config/config';

const authProvider = {
  // authentication
  login: ({ username, password }) => {
    const request = new Request(`${apiEndpoint}/auth/login`, {
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
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch((ex) => {
        throw new Error(ex);
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { user } = JSON.parse(localStorage.getItem('auth'));
      return Promise.resolve({
        id: user.id,
        fullName: user.name,
        role: user.role,
        avatar: null,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: () => {
    try {
      const { user } = JSON.parse(localStorage.getItem('auth'));
      const role = user.role;
      return role ? Promise.resolve(role) : Promise.reject();
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default authProvider;
