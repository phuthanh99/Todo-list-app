import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import TodoList from './TodoList/TodoList';
import './TodoList/TodoList.css';


function App() {
  return (
    <div className="App">
      <LoadingComponent/>
      <TodoList />
    </div>
  );
}

export default App;
