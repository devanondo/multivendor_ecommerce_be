import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import logger from 'morgan';
import { connectDatabase } from './server.js';
import {
    PORT,
    REDIS_CLIENT_HOST,
    REDIS_CLIENT_PASSWOORD,
    REDIS_CLIENT_PORT,
} from './utils/siteEnv.js';
import { GlobalErrorHandler } from './middleware/globalError.js';
import ErrorHandler from './utils/errorHandler.js';
import router from './routes/index.js';

import redis from 'redis';

// Initialze Express
const app = express();

// Configuration
const options = [
    cors({
        origin: '*',
    }),
    logger('tiny'),
    helmet(),
    express.json({ limit: '30mb' }),
    cookieParser(),
];
app.use(options);

//  const client = redis.createClient(
//     'redis://default:CXet6g8FGq9gj9uxBI30LsNav21kVgDK@redis-18011.c12.us-east-1-4.ec2.cloud.redislabs.com:18011'
// );

export const client = redis.createClient({
    password: REDIS_CLIENT_PASSWOORD,
    socket: {
        host: REDIS_CLIENT_HOST,
        port: REDIS_CLIENT_PORT,
    },
});

client.connect();
client.on('error', (err) => {
    console.log(err);
});

// Basic Route
app.get('/', (req, res) =>
    res.json({
        status: 'success',
        message: 'Server is running wow!',
    })
);

// Routes
app.use('/api/v1', router);

// Connect Server
connectDatabase()
    .then(() => {
        console.log('DB Connected!');
        app.listen(PORT, () => console.log(`Server Started on the Port: ${PORT}`));
    })
    .catch((error) => console.log(error.message));

// Catch Unhandled routes
app.all('*', (req, res, next) => {
    next(new ErrorHandler(`Cannot find ${req.originalUrl} on this server!`, 404));
});

// Globally handled Error
app.use(GlobalErrorHandler);
