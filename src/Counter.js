import React from "react";
import { connect } from "react-redux";
import { decrease, increase, reset, modalOpen } from "./actions";

function Counter({ name, count, increase, decrease, reset, modalOpen }) {
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={decrease}>
          decrease
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            modalOpen(
              "susan",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            );
          }}
        >
          reset
        </button>
        <button type="button" className="btn" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
}
function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   console.log(ownProps);
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset());
//       dispatch(modalOpen(
//         "susan",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
//     },
//   };
// }
export default connect(mapStateToProps, {
    increase,
    reset,
    decrease,
    modalOpen
  })(Counter);
