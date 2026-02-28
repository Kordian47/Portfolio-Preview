import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import http from "http";

const PYTHON_BACKEND = "http://localhost:8000";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.all("/api/*", (req: Request, res: Response) => {
    const options = {
      hostname: "localhost",
      port: 8000,
      path: req.originalUrl,
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const proxyReq = http.request(options, (proxyRes) => {
      res.status(proxyRes.statusCode || 500);
      Object.entries(proxyRes.headers).forEach(([key, value]) => {
        if (value) res.setHeader(key, value);
      });
      proxyRes.pipe(res);
    });

    proxyReq.on("error", () => {
      res.status(502).json({ error: "Python backend unavailable" });
    });

    if (req.body && Object.keys(req.body).length > 0) {
      proxyReq.write(JSON.stringify(req.body));
    }

    proxyReq.end();
  });

  return httpServer;
}
