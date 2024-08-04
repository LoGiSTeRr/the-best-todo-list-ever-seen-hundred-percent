import React, {useEffect} from 'react';
import Task from "@/components/Task";
import apiClient from "@/libs/api";
import {toast} from "react-hot-toast";

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