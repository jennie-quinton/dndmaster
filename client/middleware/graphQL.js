require('isomorphic-fetch');

const graphQL = store => next => (action) => {
  const { query } = action;
  if (!query) return next(action);

  next({ type: `${action.type}_REQUEST` });

  const apiUrl = process.env.API_PROXY_HOST;
  const endpoint = '/api/graphql';
  const url = process.env.NODE_ENV === 'development' ? apiUrl + endpoint : endpoint;

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
    .then((response) => {
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
