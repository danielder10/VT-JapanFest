function Task({ task, toggleTaskStatus, deleteTask }) {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskStatus(task.id)}
          disabled={task.completed} 
        />
        <span>{task.text}</span>
        <button onClick={() => deleteTask(task.id)}>Remove</button>
      </div>
    );
  }
  
  export default Task;
  