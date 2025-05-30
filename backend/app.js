import express from 'express';
import cors from 'cors';
import taskRoute from "./routes/taskRoute.js"

// port number
const PORT = 6000;

// Create an Express application
const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Define the base route for tasks
app.use('/tasks',taskRoute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
