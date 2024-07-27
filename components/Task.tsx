import React, {useState} from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";
import {GiConfirmed} from "react-icons/gi";

const Task = ({task} : {task : TaskType}) => {

    const [isEditEnabled, setIsEditEnabled] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // task.[e.target.name] = e.target.value;
    }

    return (
        <div className="card bg-base-300 w-[45vw] h-full p-5 flex flex-col gap-2">
            {!isEditEnabled ? (
                <div>
                    <p className="text-[30px]">{task.name}</p>
                    <p>{task.description}</p>
                    <p>Priority - {task.priority}</p>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={task.name}
                        onChange={(e) => handleInputChange(e)}
                        className="input input-bordered w-full placeholder:opacity-60"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        name="description"
                        value={task.description}
                        onChange={(e) => handleInputChange(e)}
                        className="input input-bordered w-full placeholder:opacity-60"
                        autoComplete="off"
                    />
                </div>
            )}
            <div className="justify-end flex gap-2">
                {!isEditEnabled ? (
                    <button onClick={() => setIsEditEnabled(true)} className="btn btn-warning">
                        <FaEdit className="w-6 h-6"/>
                    </button>
                ) : (
                    <button className="btn btn-success">
                        <GiConfirmed className="w-6 h-6"/>
                    </button>
                )}
                <button onClick={() => document.getElementById('delete_task_modal')!.showModal()}
                        className="btn btn-error">
                    <FaTrash className="w-6 h-6"/>
                </button>
                <dialog id="delete_task_modal" className="modal">
                    <div className="modal-box flex flex-col gap-3">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Are You sure you want to delete this startup?</h3>
                        <form method="dialog" className="flex gap-3">
                            <button className="btn btn-error" >Delete</button>
                            <div className="btn">No</div>
                        </form>
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