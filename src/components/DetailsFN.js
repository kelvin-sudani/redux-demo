import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, removeName } from "../redux/reducers";

const DetailsFN = props => {
  const name = useSelector(state => state.nameReducer.name);
  const dispatch = useDispatch();
  const cn = e => {
    e.preventDefault();
    dispatch(updateName("OJ"));
  };

  const dn = e => {
    e.preventDefault();
    dispatch(removeName());
  };

  return (
    <div>
      <h2>name is: {name}</h2>
      <button onClick={cn}> Change Name with "Hooks"</button>
      <button onClick={dn}> Delete Name with "Hooks"</button>
    </div>
  );
};

export default DetailsFN;
