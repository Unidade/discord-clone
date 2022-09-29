import * as dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_UR environment variable inside .env');
}
