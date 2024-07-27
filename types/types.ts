/**
 * Represents a task.
 * @typedef {Object} Task
 * @property {number} id - The unique identifier of the task.
 * @property {string} name - The name of the task.
 * @property {string} description - A description of the task.
 * @property {number} priority - The priority of the task.
 * @property {string} status - The status of the task.
 */
type TaskType = {
    id: number;
    name: string;
    description: string;
    priority: number;
    status: string;
}