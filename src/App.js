import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import List from './Components/Main/List/List';
//import data from "./mock.json"

function App() {
  //const [tasks, setTasks] = useState(data);
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
    </div>
  );
}

export default App;
