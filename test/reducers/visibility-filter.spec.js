import deepFreeze from 'deep-freeze'

const initialState = 'SHOW_ALL'
export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

describe('Visibility Filter', () => {
  it('sets initial state', () => {
    const stateBefore = undefined
    const action = {}
    const stateAfter = "SHOW_ALL"
    deepFreeze(action)

    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
  })

  it('can set visibility filter', () => {
    const stateBefore = 'SHOW_ALL'
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'filter'
    }
    const stateAfter = 'filter'
    deepFreeze(stateBefore)
    deepFreeze(action)
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
  })
})
