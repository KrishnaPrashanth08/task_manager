import React from 'react';

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li
          key={task.id}
          className={task.is_completed ? 'completed' : ''}
        >
          <div>
            <span className="task-title">{task.title}</span>
            <span className="task-desc">{task.description}</span>
          </div>
          <div>
            {!task.is_completed && (
              <button onClick={() => onCompleteTask(task.id)}>
                Complete
              </button>
            )}
            <button onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
