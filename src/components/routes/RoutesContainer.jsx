
import React, { Component } from "react";
import RoutesView from "./RoutesView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, me } from "../../redux/teacher";
import { purge } from "../../redux/player/player.actions";
import { NavbarContainer } from '../containers'

class RoutesContainer extends Component {
  componentDidMount() {
    (this.props.isLoggedIn == true ? console.log("Logged in") : this.props.loadInitialData(this.props.isLoggedIn));
  }
  render() {
    return (
    <div>
      <NavbarContainer isLoggedIn={this.props.isLoggedIn} signout={this.props.signout} purgeCourses={this.props.purgeCourses}/> 
      <RoutesView isLoggedIn={this.props.isLoggedIn} userId={this.props.userId} /> 
    </div>)
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.teacher.isLoggedIn,
    userId: state.teacher.email
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me()),
    signout: () => dispatch(logout()),
    purgeCourses: () => dispatch(purge())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));