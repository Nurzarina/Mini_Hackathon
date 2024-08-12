import React from 'react';

function Filter() {
    return (
        <div className="filter-container">
<b>Filter:</b>
            <select className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            <select className="filter-priority">
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>
        </div>
    );
}

export default Filter;