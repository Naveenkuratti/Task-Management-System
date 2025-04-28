
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TaskForm.css';
import axios from 'axios'; 

export default function TaskForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    effort: '',
    dueDate: '',
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (location.state && location.state.index !== undefined) {
      const stored = JSON.parse(localStorage.getItem('tasks')) || [];
      const idx = location.state.index;
      const taskToEdit = stored[idx];
      setFormData({
        title: taskToEdit.title,
        description: taskToEdit.description,
        effort: taskToEdit.effort,
        dueDate: taskToEdit.dueDate,
      });
      setEditMode(true);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title: formData.title,
      description: formData.description,
      effort_to_complete: parseInt(formData.effort),
      due_date: formData.dueDate,
    };

    try {
      const response = await axios.post('http://localhost:8000/task', taskData);
      console.log(response.data); 

      if (response.status === 200) {
        alert('✅ Task added successfully!');
        navigate('/tasklist');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('❌ Failed to add task. Please try again.');
    }
  };

  return (
    <div className="task-form-container">
      <h2>{editMode ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Effort (hours)"
          value={formData.effort}
          onChange={(e) => setFormData({ ...formData, effort: e.target.value })}
          required
        />
        <input
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          required
        />
        <button type="submit" className="submit-btn">
          {editMode ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
}
