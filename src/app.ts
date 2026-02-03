import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/user.routes';
import { ApiError } from './utils/apiError';
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, "Route Not Found"));
});

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ status: "error", statusCode, message });
});

export default app;