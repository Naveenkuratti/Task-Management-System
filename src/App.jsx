import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasklist" element={<TaskList/>} />
        <Route path="/taskform" element={<TaskForm />} />
      

      </Routes>
    </Router>
  );
};

export default App;
