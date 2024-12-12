"use client";

import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import style from 'style.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: 'Task 1', completed: false },
    { id: 1, text: 'Task 2', completed: false },
    { id: 2, text: 'Task 3', completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, text: task, completed: false }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const pendingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />

      <h2>You have {pendingTasks} tasks remaining</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {filteredTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
