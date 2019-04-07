export default (state = [], {type, payload}) => {
  switch(type) {
    case 'ADD_MOVIES':
      return payload.movies;
    default:
      return state;
  }
}