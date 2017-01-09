import React from 'react'
import {connect} from 'react-redux'
import setVisibilityFilter from '../../action-creators/set-visibility-filter';

const Link = ({active, onClick, children}) => {
  if (active) {
    return (<span>{children}</span>);
  }
  return (
    <a href="#" onClick={onClick}>{children}</a>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
})

export {Link}
export default connect(mapStateToProps, mapDispatchToProps)(Link)
