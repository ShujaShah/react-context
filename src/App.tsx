import { useReducer } from "react";
import "./App.css";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import loginReducer from "./state-management/reducers/loginReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  return (
    <>
      {/* <Counter/>
    <LoginStatus/>
    <TaskList/> 
    */}
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <TaskList />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
