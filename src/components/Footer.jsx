import React from "react";
import FilterLink from "../containers/FIlterLink";
import { VisibilityFilter } from "../actions";
const Footer = () => {
  return (
    <footer>
      <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </footer>
  );
};
export default Footer;
