const extend = (a, b) => Object.assign({}, a, b);

export const ActionType = {
  TOGGLE_EDIT  : `TOGGLE_EDIT`,
  SET_MESSAGES : `SET_MESSAGES`,
  SET_RESULT   : `SET_RESULT`
};


export const updateStore = (state, action) => {
  
  switch (action.type) {
    case ActionType.TOGGLE_EDIT: 
      return extend(state, { edit: !state.edit });

    case ActionType.SET_MESSAGES:
      return extend(state, { messages: action.payload });
    
    case ActionType.SET_RESULT:
      return extend(state, { results: action.payload });

    default: state
  }
};