import { graphql } from 'graphql';

const root = {
  name: 'Mikely Gregor',
  race: 'Human',
  class: 'Monk',
};

const graphQL = store => next => (action) => {
  const { schema, query } = action;

  if (!query) return next(action);

  next({ type: `${action.type}_REQUEST` });

  return graphql(schema, query, root)
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
