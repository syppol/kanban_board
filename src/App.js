import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import TaskDetails from "./Components/TaskDetails/TaskDetails";
import Footer from './Components/Footer/Footer'
import { CommonArrayContext, CommonArrayUpdateContext } from './TasksContext';

//import data from "./mock.json"

function App() {
  //const [tasks, setTasks] = useState(data);
  const [tasks, setTasks] = useState([]);
  const [commonArray, setCommonArray] = useState([]);

  useEffect(() => {
    const savedState = localStorage.getItem('appContextState');
    if (savedState !== `[]`) {
      setCommonArray(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appContextState', JSON.stringify(commonArray));
    setTasks([...commonArray]);
  }, [commonArray]);
  return (
    <Router>
      <CommonArrayContext.Provider value={commonArray}>
        <CommonArrayUpdateContext.Provider value={setCommonArray}>
          <div className="App">
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={<Main tasks={tasks} setTasks={setTasks} />}
              />
              <Route
                path="/task/:taskId"
                element={
                  <TaskDetails
                    tasks={tasks}
                  />
                }
              />

            </Routes>
            <Footer tasks={tasks} />
          </div>
        </CommonArrayUpdateContext.Provider>
      </CommonArrayContext.Provider>
    </Router>
  );
}
export default App;
