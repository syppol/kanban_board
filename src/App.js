import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import List from './Components/Main/List/List';
import { CommonArrayContext, CommonArrayUpdateContext } from './TasksContext';

//import data from "./mock.json"

function App() {
  //const [tasks, setTasks] = useState(data);
  const [tasks, setTasks] = useState([]);
  const [commonArray, setCommonArray] = useState([]);

  return (
    <CommonArrayContext.Provider value={commonArray}>
      <CommonArrayUpdateContext.Provider value={setCommonArray}>
        <div className="App">
          <Header />
          <Main tasks={tasks} setTasks={setTasks} />
          <Footer tasks={tasks} />
        </div>
      </CommonArrayUpdateContext.Provider>
    </CommonArrayContext.Provider>
  );
}

export default App;
