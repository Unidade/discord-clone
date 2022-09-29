import app from './app';
import dbConnect from './database/dbconnection';
import * as dotenv from 'dotenv';
import * as http from 'http';
dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
const server = http.createServer(app);
dbConnect().then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`);
    });
});
