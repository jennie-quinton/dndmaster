import { graphql, GraphQLSchema } from 'graphql';

const root = {
  characters: [
    {
      id: 1,
      initiative: 12,
      name: 'Mikely Gregor',
      race: 'Human',
      class: 'Monk',
    },
    {
      id: 2,
      initiative: 16,
      name: 'Qwen',
      race: 'Elf',
      class: 'Fighter',
    },
  ],
};

const graphQL = store => next => (action) => {
  const { schemaType, query } = action;

  if (!query) return next(action);

  next({ type: `${action.type}_REQUEST` });

  const schema = new GraphQLSchema({
    query: schemaType,
  });

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
