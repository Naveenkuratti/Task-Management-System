import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios'; 
import * as XLSX from 'xlsx'; // ✅ install this library: npm install xlsx
import './TaskList.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks(); 
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/task/1');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Failed to load tasks.'); 
    }
  };

  const handleEdit = (taskId) => {
    navigate('/taskform', { state: { id: taskId } });
  };

  const handleDelete = async (taskId) => {
    if (!window.confirm('Delete this task?')) return;

    try {
      await axios.delete(`http://localhost:8000/task/${taskId}`);
      alert('Task deleted successfully!');
      fetchTasks(); 
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task.');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.clear();
      navigate('/'); 
    }
  };

  // ✅ Add this to export tasks locally (no API needed)
  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");

    XLSX.writeFile(workbook, "Tasks.xlsx");
  };

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Task Management Application</h2>
        <div className="button-group">
          <button
            className="create-task-btn"
            onClick={() => navigate('/taskform')}
          >
            + Create Task
          </button>

          <button
            className="export-btn"
            onClick={handleExportToExcel}
          >
            Export to Excel
          </button>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Title</th>
            <th>Description</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={6} className="no-tasks">No tasks available</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td><input type="checkbox" /></td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.effort_to_complete}</td>
                <td>{task.due_date}</td>
                <td>
                  <button className="action-btn edit" onClick={() => handleEdit(task.id)}>
                    <FaEdit />
                  </button>
                  <button className="action-btn delete" onClick={() => handleDelete(task.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
