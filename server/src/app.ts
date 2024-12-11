import express from "express";
import path from "path";
import userRoutes from "./routes/user.route";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Serve client app
app.use(express.static(path.join(__dirname, "../../../client/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist", "index.html"));
});

// Serve admin panel
app.use(express.static(path.join(__dirname, "../../../admin/dist")));

// Serve any admin sub-route to the index.html (for SPA routing)
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../admin/dist", "index.html"));
});

export default app;
