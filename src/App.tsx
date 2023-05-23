import { useReducer } from "react";
import "./App.css";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import loginReducer from "./state-management/reducers/loginReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(loginReducer, "");
  return (
    <>
      {/* <Counter/>
    <LoginStatus/>
    <TaskList/> 
    */}
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
