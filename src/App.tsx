import { useReducer } from "react";
import "./App.css";
import TaskList from "./state-management/tasks/TaskList";
import tasksReducer from "./state-management/tasks/tasksReducer";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/tasks/tasksContext";
import loginReducer from "./state-management/auth/loginReducer";
import AuthContext from "./state-management/auth/authContext";
import AuthProvider from "./state-management/auth/AuthProvider";
import TaskProvider from "./state-management/tasks/TaskProvider";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      {/* <Counter/>
    <LoginStatus/>
    <TaskList/> 
    */}
    <Counter/>
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
