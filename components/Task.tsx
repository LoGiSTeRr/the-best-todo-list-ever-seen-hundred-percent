import React, {useState} from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";
import {GiConfirmed} from "react-icons/gi";
import {getPriorityClass, getPriorityLabel} from "@/Helpers/priorityHelpers";

type TaskProp = {
    task: TaskType;
    onDeleteTask: (id: string) => void;
    onUpdateTask: (id: string, updatedTask: Partial<TaskType>) => void;
}

const Task = ({task, onDeleteTask, onUpdateTask} : TaskProp) => {

    const [isEditEnabled, setIsEditEnabled] = useState<boolean>(false)
    const deleteTaskDialogRef = React.useRef<HTMLDialogElement>(null);

    const [editedTask, setEditedTask] = useState<TaskType>(task);
    const [priority, setPriority] = useState<number>(60);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name==="priority") {
            setEditedTask({
                ...editedTask,
                [e.target.name]: getPriorityLabel(Number(e.target.value))
            });
            return;
        }
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value
        });
    }

    const handleEditSubmit = () => {
        onUpdateTask(task.id, editedTask);
        setIsEditEnabled(false);
    };
    return (
        <div className="card bg-base-300 w-[85vw] sm:w-[45vw] h-full p-5 flex flex-col gap-8">
            {!isEditEnabled ? (
                <div>
                    <p className="text-[30px]">{task.name}</p>
                    <p>{task.description}</p>
                    <p>Priority - {task.priority}</p>
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="name"
                        value={editedTask.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full placeholder:opacity-60"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedTask.description}
                        onChange={handleInputChange}
                        className="input input-bordered w-full placeholder:opacity-60"
                        autoComplete="off"
                    />
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
                </div>
            )}
            <div className="justify-end flex gap-2">
                {!isEditEnabled ? (
                    <button onClick={() => setIsEditEnabled(true)} className="btn btn-warning">
                        <FaEdit className="w-6 h-6"/>
                    </button>
                ) : (
                    <button onClick={handleEditSubmit} className="btn btn-success">
                        <GiConfirmed className="w-6 h-6"/>
                    </button>
                )}
                <button onClick={() => deleteTaskDialogRef.current?.showModal()}
                        className="btn btn-error">
                    <FaTrash className="w-6 h-6"/>
                </button>
                <dialog id="delete_task_modal" ref={deleteTaskDialogRef} className="modal">
                    <div className="modal-box flex flex-col gap-3">
                        <h3 className="font-bold text-lg">Are You sure you want to delete this task?</h3>
                        <div className="flex gap-3">
                            <button
                                className="btn btn-error"
                                onClick={(event) => {
                                    event.preventDefault();
                                    onDeleteTask(task.id);
                                    deleteTaskDialogRef.current?.close();
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="btn"
                                onClick={() => deleteTaskDialogRef.current?.close()}
                            >
                                No
                            </button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button className="hover:cursor-default">close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default Task;