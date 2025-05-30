import express from 'express';
import {createNewTask, fetchAllTasks,fetchTaskById,updateTask,deleteTask} from "../controllers/taskController.js"

const router = express.Router();

// Define routes for task operations

// Create a new task
router.post('/', createNewTask);

// Get all tasks
router.get('/', fetchAllTasks);

// Get a single task by ID
router.get('/:id', fetchTaskById);

// Update a task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

export default router;
