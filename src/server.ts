import express from "express";
import logger from "./logger";

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    logger.info("Endpoint / accessed", { route: "/" });
    res.send("Hello Grafana!");
});

app.get("/error", (req, res) => {
    logger.error("Error Detected", { route: "/error" });
    res.status(500).send("Error occurred!");    
});

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`, { port: PORT });
    console.log(`🚀 Server running on http://localhost:${PORT}`);
})