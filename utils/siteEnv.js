import dotenv from 'dotenv';
dotenv.config();

const {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    CLOUD_NAME,
    API_KEY,
    API_SECRET,
    REDIS_CLIENT_PASSWOORD,
    REDIS_CLIENT_PORT,
    REDIS_CLIENT_HOST,
    // eslint-disable-next-line no-undef
} = process.env;

export {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    CLOUD_NAME,
    API_KEY,
    API_SECRET,
    REDIS_CLIENT_PASSWOORD,
    REDIS_CLIENT_PORT,
    REDIS_CLIENT_HOST,
};
