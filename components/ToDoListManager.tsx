'use client'
import React, {useState} from 'react';
import ToDoList from "@/components/ToDoList";
import {v4} from "uuid";
import TaskCreationForm from "@/components/TaskCreationForm";
import apiClient from "@/libs/api";
import {toast} from "react-hot-toast";

const ToDoListManager = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])

    const handleAddTask = async (newTask: TaskType) => {
        try {
            await apiClient.post("/task", newTask);
            toast.success("Task submitted");
        }
        catch (e){

        }
        setTasks([...tasks, {...newTask, id: v4() }]);
    };

    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleUpdateTask = (id: string, updatedTask: Partial<TaskType>) => {
        const index = tasks.findIndex(task => task.id === id);

        if (index !== -1) {
            // Create a new task array
            const newTasks = [...tasks];

            // Update the existing task with new data
            newTasks[index] = { ...newTasks[index], ...updatedTask };

            // Update the task state
            setTasks(newTasks);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <TaskCreationForm onSubmit={handleAddTask}/>
            <ToDoList tasks={tasks} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask}/>
        </div>
    );
};

export default ToDoListManager;