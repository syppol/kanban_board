import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
