import React, { Component } from "react";
import { connect } from "react-redux";
import { updateName, removeName } from "../redux/reducers";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  cn = e => {
    e.preventDefault();
    this.props.changeName("OJ");
  };

  dn = e => {
    e.preventDefault();
    this.props.deleteName();
  };
  render() {
    return (
      <div>
        <h1>name: {this.props.pname}</h1>
        <button onClick={this.cn}> Change Name </button>
        <button onClick={this.dn}> Delete Name </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: newName => {
      dispatch(updateName(newName));
    },
    deleteName: () => {
      dispatch(removeName());
    }
  };
};

const mapStateToProps = state => {
  console.log(state);
  return { pname: state.nameReducer.name };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
