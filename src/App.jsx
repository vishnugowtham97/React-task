import React from "react";
import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Task_1 from "./Pages/Task_1/Task_1";
import Task_2 from "./Pages/Task_2/Task_2";
import Task_4 from "./Pages/Task_4/Task_4";
import Task_3 from "./Pages/Task_3/Task_3";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Task_1 />} />
        <Route path="task-2" element={<Task_2 />} />
        <Route path="task-3" element={<Task_3 />} />
        <Route path="task-4" element={<Task_4 />} />
      </Routes>
    </>
  );
}

export default App;
