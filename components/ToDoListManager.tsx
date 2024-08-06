'use client'
import React, {useEffect, useState} from 'react';
import ToDoList from "@/components/ToDoList";
import {v4} from "uuid";
import TaskCreationForm from "@/components/TaskCreationForm";
import apiClient from "@/libs/api";
import {toast} from "react-hot-toast";

const ToDoListManager = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])

    const handleAddTask = async (newTask: TaskType) => {
        try {
            let taskResponse= await apiClient.post("/task", newTask);
            toast.success("Task submitted");
            console.log(taskResponse.data);
            setTasks([...tasks, {...taskResponse.data}]);
        }
        catch (e){
            toast.error("Task submission failed, try again");
        }
    };


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await apiClient.get("/task");
                toast.success("data fetched");
                setTasks(response.data);
            } catch (e) {
                toast.error("Failed to fetch tasks");
            }
        };

        fetchTasks();
    }, []);

    const handleDeleteTask = async (id: any) => {
        try {
            await apiClient.delete(`/task`, { data: { id } });
            toast.success("Task deleted");
        } catch (e) {
            toast.error("Failed to delete task");
        }
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleUpdateTask = async (id: string, updatedTask: Partial<TaskType>) => {
        const index = tasks.findIndex(task => task.id === id);

        if (index !== -1) {
            try {
                let taskResponse= await apiClient.put(`/task`, { id: id, data: updatedTask });
                const newTasks = [...tasks];
                newTasks[index] = { ...newTasks[index], ...taskResponse.data };
                setTasks(newTasks);
                toast.success("Task updated");
            } catch (e) {
                toast.error("Failed to update task");
            }
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