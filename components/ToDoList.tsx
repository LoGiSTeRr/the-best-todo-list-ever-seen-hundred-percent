import React from 'react';
import Task from "@/components/Task";

type ToDoListProps = {
    tasks: TaskType[];
    onDeleteTask: (id: string) => void;
    onUpdateTask: (id: string, updatedTask: Partial<TaskType>) => void;

}

const ToDoList = ({tasks, onDeleteTask, onUpdateTask} :ToDoListProps) => {
    return (
        <div className="flex flex-col gap-8 py-8 justify-center items-center">
            {tasks.map(task => (
                <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask}/>
            ))}
        </div>
    );
};

export default ToDoList;