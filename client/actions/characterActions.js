const addCharacter = () => (dispatch) => {
  return dispatch({
    type: 'CREATE_CHARACTER',
    data: {
      name: 'Mikely Gregor',
      race: 'Human',
      class: 'Monk',
    }
  })
}

export {
  addCharacter,
}