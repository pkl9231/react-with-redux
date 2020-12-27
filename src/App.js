import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store"; // finally here i import store
import "./App.css";
import BookContainer from "./components/BookContainer";
import HookBookContainer from "./components/HookBookContainer";
import PenContainer from "./components/PenComponents";


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <HookBookContainer />
        <BookContainer />
        <PenContainer />
      </div>
    </Provider>
  );
}

export default App;
