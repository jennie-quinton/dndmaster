import {graphql} from 'graphql';

var root = {
  name: 'Mikely Gregor',
  race: 'Human',
  class: 'Monk',
};

const graphQL = (store) => (next) => (action) => {
  const {schema, query} = action;

  if(!query) return next(action);

  next({type: `${action.type}_REQUEST`});

  graphql(schema, query, root)
    .then((response) => {
      if (response.data) {
        next({
          type: `${action.type}_SUCCESS`,
          ...response,
        })
      }

      if (response.errors) {
        next({
          type: `${action.type}_FAILURE`,
          error: {...response.errors},
        })
      }
    })
    .catch((error)=>{
      console.error(error);
      next({
        type: `${action.type}_FAILURE`,
        error,
      })
    })
}

export default graphQL;
