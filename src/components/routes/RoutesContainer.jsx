
import React, { Component } from "react";
import RoutesView from "./RoutesView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { me } from "../../redux/teacher";
import { NavbarContainer } from '../containers'

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return (
    <div>
      <NavbarContainer isLoggedIn={this.props.isLoggedIn} /> 
      <RoutesView isLoggedIn={this.props.isLoggedIn} userId={this.props.userId} /> 
    </div>)
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.teacher.id,
    userId: state.teacher.email
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));