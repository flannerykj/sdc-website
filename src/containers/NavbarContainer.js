import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux'
import { getConfigs} from '../actions/configs';

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    configs: state.configs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getConfigs: () => {
      dispatch(getConfigs())
      }
    }
  }



export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Navbar);
