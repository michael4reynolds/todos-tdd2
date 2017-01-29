import React from 'react'
import FilterLink from './Link'

const Footer = () => (
  <p className="filter-links">
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    {' '}
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </p>
)

export default Footer
