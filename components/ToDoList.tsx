import React from 'react';
import Task from "@/components/Task";

const ToDoList = ({tasks} : {tasks: TaskType[]}) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ToDoList;