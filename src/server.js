// import express from 'express';
// import { getAllStudents, getStudentById } from './services/students.js';
// import pino from 'pino-http';
// import cors from 'cors';
// import { env } from './utils/env.js';
// import studentsRouter from './routers/students.js'; //

// const PORT = Number(env('PORT', '3000'));

// export const startServer = () => {
//   const app = express();

//   app.use(express.json());
//   app.use(cors());

//   app.use(
//     pino({
//       transport: {
//         target: 'pino-pretty',
//       },
//     }),
//   );

//   app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello world!',
//     });
//   });

//   app.use('*', (req, res, next) => {
//     res.status(404).json({
//       message: 'Not found',
//     });
//   });

//   app.use((err, req, res, next) => {
//     res.status(500).json({
//       message: 'Something went wrong',
//       error: err.message,
//     });
//   });

//   app.get('/students', async (req, res) => {});

//   app.get('/students/:studentId', async (req, res) => {});

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// };
import dotenv from 'dotenv';
import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import { env } from './utils/env.js';
dotenv.config();
const PORT = Number(env('PORT', '3000'));
// console.log(PORT);
export const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.get('/', (req, res) => {
    res.json({
      message: 'Hellow rolds',
    });
  });
  app.use((req, res, next) => {
    console.log(`Tiem ${new Date().toLocaleString()}`);
    next();
  });
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.listen(PORT, () => {
    console.log('Port 3000 is running!');
  });
};
