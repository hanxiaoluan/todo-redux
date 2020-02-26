import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  setVisibilityFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
});
export default connect(mapStateToProps, mapDispatchToProps)(Link);
