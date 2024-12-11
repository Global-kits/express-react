import express from "express";
import path from "path";
import userRoutes from "./routes/user.route";

const app = express();

app.use(express.static(path.join(__dirname, "../../client/dist")));

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Handle all other routes with the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

export default app;
