'use client'
import React, {useState} from 'react';
import ToDoList from "@/components/ToDoList";
import { FaTrash } from "react-icons/fa";

const ToDoListManager = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])

    const [isAddStartupShown, setIsAddStartupShown] = useState<boolean>(false)


    return (
        <div>
            {!isAddStartupShown ? (
                <button className="btn btn-primary gap-2" onClick={() => {
                    setIsAddStartupShown(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-5 h-5 animate-rotate">
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                    </svg>
                    Add Task
                </button>
            ) : (
                <div className="card bg-base-100 w-[45vw] h-full p-5">
                    <form className="space-y-4">
                        <div className="flex gap-2">
                            <input required type="text"
                                   placeholder="Name"
                                   className="input input-bordered w-full placeholder:opacity-60"
                                   autoComplete="off"/>
                            <input required type="text"
                                   placeholder="Description"
                                   className="input input-bordered w-full placeholder:opacity-60"
                                   autoComplete="off"/>
                            <div className="btn btn-square" onClick={() => {
                                setIsAddStartupShown(false)
                            }}>
                                <FaTrash className="w-5 h-5 text-error"/>
                            </div>
                        </div>
                        <p>Select Priority:</p>
                        <input type="range" min={0} max="100" className="range" step="25"/>
                        <button className="btn btn-block btn-secondary" type="submit">Add Task</button>
                    </form>
                </div>)}


            <ToDoList tasks={tasks}/>
        </div>
    );
};

export default ToDoListManager;