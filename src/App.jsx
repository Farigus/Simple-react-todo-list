import React from "react";
import "./App.css";
import List from "./components/List/List.jsx";

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
    
        <List state={props.state.todoPage} dispatch={props.dispatch} />
       
      </header>
    </div>
  );
}

export default App;
