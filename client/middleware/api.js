require('isomorphic-fetch');

const api = store => next => (action = {}) => {
  const { endpoint } = action;
  if (!endpoint) return next(action);
  const headers = {
    'Content-Type': 'application/json',
  };
  const { auth } = store.getState();
  if (auth.token) {
    headers.Authentication = `Bearer ${auth}`;
  }
  next({ type: `${action.type}_REQUEST` });

  return fetch(endpoint, {
    method: action.method || 'GET',
    headers,
    body: action.body && JSON.stringify(action.body),
  })
    .then((response) => {
      if (!response.ok) {
        return next({
          type: `${action.type}_FAILURE`,
          error: { statusText: response.statusText },
        });
      }

      if (response.errors) {
        return next({
          type: `${action.type}_FAILURE`,
          error: { ...response.errors },
        });
      }

      return response.json().then(data => ({
        payload: { ...data },
        status: response.status,
        headers: response.headers,
      }));
    }).then(response => next({
      type: `${action.type}_SUCCESS`,
      payload: {
        ...response.payload,
      },
    })).catch((error) => {
      console.error(error); // eslint-disable-line no-console
      return next({
        type: `${action.type}_FAILURE`,
        error,
      });
    });
};

export default api;
