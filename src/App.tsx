import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <>
      {/* <Counter/>
    <LoginStatus/>
    <TaskList/> */}
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <TaskList />
      </TasksContext.Provider>
    </>
  );
}

export default App;
