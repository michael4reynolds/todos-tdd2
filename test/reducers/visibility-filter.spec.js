import deepFreeze from 'deep-freeze'

const initialState = 'SHOW_ALL'
export const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

describe('Visibility Filter', () => {
  const stateBefore = undefined
  const action = {}
  const stateAfter = "SHOW_ALL"
  deepFreeze(action)

  it('sets initial state', () => {
    expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter)
  })
})
