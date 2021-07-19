import React, { useState } from "react";
import "./App.css";

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My First Ever React Project</h1>
        <p>{inputText}</p>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
