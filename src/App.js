import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Details from "./components/Details";

import "./styles.css";
import reducers from "./redux/reducers";

const store = createStore(reducers);
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Details />
      </div>
    </Provider>
  );
}
