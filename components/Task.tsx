import React from 'react';

const Task = ({task} : {task : TaskType}) => {
    return (
        <div>
            <p>ID: {task.id}</p>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
        </div>
    );
};

export default Task;