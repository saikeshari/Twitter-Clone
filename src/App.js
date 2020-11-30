import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM convention
    <div className="app">
      <h1>This is a atwitter clone</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}

      {/* Widgets */}

    </div>
  );
}

export default App;
