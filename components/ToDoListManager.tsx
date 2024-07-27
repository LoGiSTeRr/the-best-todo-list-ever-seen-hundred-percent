'use client'
import React, {useState} from 'react';
import ToDoList from "@/components/ToDoList";
import {v4} from "uuid";
import TaskCreationForm from "@/components/TaskCreationForm";

const ToDoListManager = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])

    const handleAddTask = (newTask: TaskType) => {
        setTasks([...tasks, {...newTask, id: v4() }]);
    };

    return (
        <div>
            <TaskCreationForm onSubmit={handleAddTask}/>
            <ToDoList tasks={tasks}/>
        </div>
    );
};

export default ToDoListManager;