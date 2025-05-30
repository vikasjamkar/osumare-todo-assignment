import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../services/taskServices.js";

// Create new task
export const createNewTask = (req, res) => {
  try {
    const { title, description, priority, status } = req.body;
    if (!title || !description || !priority) {
      return res.status(400).json({
        status: false,
        message: "Title, description, and priority are required",
      });
    }
    const newTask = createTask({ title, description, priority, status });
    return res.status(201).json({
      status: true,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};
//  Get all tasks
export const fetchAllTasks = (req, res) => {
  try {
    const tasks = getAllTasks();
    return res.status(200).json({
      status: true,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};
// Get single task by ID
export const fetchTaskById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid task ID",
      });
    }
    const task = getTaskById(id);

    if (!task) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Task retrieved successfully",
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};
//  Update task by ID
export const updateTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid task ID",
      });
    }

    const updatedTask = updateTaskById(id, req.body);

    if (!updatedTask) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};
//  Delete task by ID
export const deleteTask = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        status: false,
        message: "Invalid task ID",
      });
    }

    const isDeleted = deleteTaskById(id);

    if (!isDeleted) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message || "Internal Server Error",
    });
  }
};
