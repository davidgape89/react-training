import {setSortBy} from '../../actions/filters';

describe('filters actions -', () => {
  it('creates set sort by action', () => {
    const sortBy = 'sort';
    expect(setSortBy(sortBy)).toEqual({
      type: 'SET_SORT',
      payload: {sortBy}
    });
  })
})