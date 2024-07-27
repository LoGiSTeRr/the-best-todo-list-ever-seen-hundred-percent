import React from 'react';
import Task from "@/components/Task";

const ToDoList = ({tasks} : {tasks: TaskType[]}) => {
    return (
        <div className="flex flex-col gap-8 py-8">
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ToDoList;