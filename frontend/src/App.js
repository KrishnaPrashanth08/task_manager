import React, {useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = 'http://localhost:5000/tasks';

function App() {

  const[tasks, setTasks ] = useState([]);
  const[error, setError] =  useState('');

  useEffect(()=>{
    fetchTasks();
  },[]);

  const fetchTasks = async () => {
    try{
      const response = await axios.get(API_URL);
      setTasks(response.data);
    }catch(error){
      setError('could not fetch tasks');
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Could not add task');
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/complete`);
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, is_completed: 1 } : task
      ));
    } catch (err) {
      setError('Could not mark as completed');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Could not delete task');
    }
  };

  return (
    <div className="container">
    <h1>Task Manager</h1>
    <TaskForm onAddTask={addTask} />
    {error && <div className="error">{error}</div>}
    <TaskList
      tasks={tasks}
      onCompleteTask={completeTask}
      onDeleteTask={deleteTask}
    />
  </div>
  );
}

export default App;
