import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Application from './Application';
import Todo from './Application/TodoList';
import CardDetails from './Application/CardDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Application/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route exact path="/todo/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
