import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        addTodo({
            text: input,
            priority: priority,
            completed: false,
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Add a todo" 
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
