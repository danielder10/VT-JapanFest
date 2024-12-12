import { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new task ..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
