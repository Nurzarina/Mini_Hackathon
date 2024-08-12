import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './MainTask.css'

function MainTask() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
    };

    return (

        <div className="Todo_List">
            <br></br>
            <div id='TodoTitle'><h2><u>To Do List</u></h2></div>

            <br></br>
            <h3>Add your task here:</h3>
            <TodoForm addTodo={addTodo} />
            <div id='FilterLocation'><Filter /></div>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        </div>

    )
}

export default MainTask