export const createStore = (reducer, initialState) => {
  return {
    _state: initialState,

    dispatch(action) {
      this._state = reducer(this._state, action);
    },

    getState() {
      return this._state
    }
  }
}