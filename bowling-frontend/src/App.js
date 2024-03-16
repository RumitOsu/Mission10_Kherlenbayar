import React from "react";
import Header from "./components/Header";
import BowlersTable from "./components/BowlersTable";
import "./App.css"; // Ensure you have some basic styling

function App() {
  return (
    <div className="App">
      <Header />
      <BowlersTable />
    </div>
  );
}

export default App;
