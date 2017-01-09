import setVisibilityFilter from '../../src/action-creators/set-visibility-filter'

describe('toggle-todo action creater', () => {
  it('returns a SET_VISIBILITY_FILTER action with given filter', () => {
    const action = setVisibilityFilter('filter');
    expect(action).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'filter'
    })
  });
})