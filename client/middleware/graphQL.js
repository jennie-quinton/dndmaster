require('isomorphic-fetch');

const graphQL = store => next => (action) => {
  const { query } = action;
  if (!query) return next(action);

  next({ type: `${action.type}_REQUEST` });

  return fetch('endpoint', {
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
