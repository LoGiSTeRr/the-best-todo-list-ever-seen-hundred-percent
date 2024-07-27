import {FaTrash} from "react-icons/fa";

type TaskCreationFormProps = {
    onSubmit: (task: TaskType) => void;
}

import React, {useState} from 'react';
import {getPriorityClass, getPriorityLabel} from "@/Helpers/priorityHelpers";

const TaskCreationForm = ({onSubmit} : TaskCreationFormProps) => {
    const [task, setTask] = useState<TaskType>({id: '', name: '', description: '', priority: 'High', status: ''});
    const [isAddTaskShown, setIsAddTaskShown] = useState<boolean>(false)

    const [priority, setPriority] = useState<number>(60);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (name==="priority"){
            setTask({...task, [name]: getPriorityLabel(Number(value))});
            return;
        }
        setTask({...task, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        onSubmit(task);
        setIsAddTaskShown(false);
        setTask({id: '', name: '', description: '', priority: 'High', status: ''});
        setPriority(60);
    }

    return (
        <div>
            {!isAddTaskShown ? (
                <button className="btn btn-primary gap-2" onClick={() => {
                    setIsAddTaskShown(true)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-5 h-5 animate-rotate">
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                    </svg>
                    Add Task
                </button>
            ) : (
                <div className="card bg-base-100 w-[85vw] sm:w-[45vw] h-full p-5">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex gap-2">
                            <input required type="text"
                                   placeholder="Name"
                                   name="name"
                                   className="input input-bordered w-[50%] placeholder:opacity-60"
                                   autoComplete="off" onChange={handleInputChange}/>
                            <textarea className="textarea textarea-bordered w-full placeholder:opacity-60"
                                      placeholder="Description" name="description" onChange={handleInputChange}/>
                            <div className="btn btn-square" onClick={() => {
                                setIsAddTaskShown(false)
                            }}>
                                <FaTrash className="w-5 h-5 text-error"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-between gap-2">
                            <p>Select Priority:</p>
                            <p className={"font-bold " + getPriorityClass(priority)}>
                                {getPriorityLabel(priority)}
                            </p>
                        </div>
                        <input type="range" min={0} max="90" className="range" step="30" name="priority" onChange={(e) => {
                            setPriority(Number(e.target.value));
                            handleInputChange(e);
                        }}/>
                        <button className="btn btn-block btn-secondary" type="submit">Add Task</button>
                    </form>
                </div>)}
        </div>

    );
};

export default TaskCreationForm;