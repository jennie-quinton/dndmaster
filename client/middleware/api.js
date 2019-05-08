require('isomorphic-fetch');

const graphQL = store => next => (action = {}) => {
  const { endpoint } = action;
  if (!endpoint) return next(action);

  next({ type: `${action.type}_REQUEST` });

  return fetch(endpoint, {
    method: action.method || 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (!response.ok) {
        return next({
          type: `${action.type}_FAILURE`,
          error: { statusText: response.statusText },
        });
      }

      if (response.data) {
        return next({
          type: `${action.type}_SUCCESS`,
          ...response,
        });
      }

      if (response.errors) {
        return next({
          type: `${action.type}_FAILURE`,
          error: { ...response.errors },
        });
      }

      return Promise.resolve();
    })
    .catch((error) => {
      console.error(error); // eslint-disable-line no-console
      return next({
        type: `${action.type}_FAILURE`,
        error,
      });
    });
};

export default graphQL;
