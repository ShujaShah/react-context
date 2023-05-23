import './App.css';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';

function App() {
  return <>
    <Counter/>
    <LoginStatus/>
    <TaskList/>
  </>
}

export default App;
