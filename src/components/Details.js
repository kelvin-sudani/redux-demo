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
        <button onClick={this.cn}> Change Name with "Connect"</button>
        <button onClick={this.dn}> Delete Name with "Connect</button>
      </div>
    );
  }
}

//mapDispatchToProps is creating an object with different dispatches as the items of this object
//key names will be function names in the props. So "changeName" can be used as "this.props.changeName(arg)"
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
  // props name cane be anything, I used "pname"
  //Gotchas:  Note the "nameReducer" part in "state.nameReducer.name"
  return { pname: state.nameReducer.name };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
