import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store";
import './App.css';
import BookContainer from "./components/BookContainer";
import HookBookContainer from "./components/HookBookContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BookContainer />
        <HookBookContainer/>
      </div>
    </Provider>
  );
}

export default App;
