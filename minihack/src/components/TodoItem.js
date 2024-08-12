import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
    return (
        <div className={`todo ${todo.priority}`}>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </li>
            <button className="complete-btn" onClick={() => toggleComplete(index)}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => deleteTodo(index)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default TodoItem;
