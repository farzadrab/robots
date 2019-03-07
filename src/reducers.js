const initialState = {
    searchField: ''
};

export const searchRobots = (state=initialState, actions={}) => {
  switch (actions.type) {
      case: CHANGE_SEARCH_FIELD:
          return Object.assign({}, state, searchField: actions.payload);
      default:
          return state;
  }  
};
