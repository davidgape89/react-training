export const defaultState = {
  sortBy: 'release_date'
}

export default (state = defaultState, {type, payload}) => {
  switch(type) {
    case 'SET_SORT':
      return {...state, sortBy: payload.sortBy};
    default:
      return state;
  }
}