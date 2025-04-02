import winston from "winston";
import LokiTransport from "winston-loki";

const logger = winston.createLogger({
    transports: [
        new LokiTransport({
            host: "http://localhost:3100",
            labels: { app: "express-app" },
            json: true,
            format: winston.format.json(),
        }),
    ],
});

export default logger;
