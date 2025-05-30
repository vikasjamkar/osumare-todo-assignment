let tasks = [];
let nextId = 1;

// Create a new task
export const createTask = ({ title, description, priority, status }) => {
  const task = {
    id: nextId++,
    title,
    description,
    priority,
    status: !!status,
  };
  tasks.push(task);
  return task;
};
// Get all tasks
export const getAllTasks = () => {
  return tasks;
};
// Get a task by ID
export const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};
// Update a task by ID
export const updateTaskById = (id, updatedFields) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return null;
  tasks[index] = {
    ...tasks[index],
    ...updatedFields,
    id,
  };
  return tasks[index];
};
// Delete a task by ID
export const deleteTaskById = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
