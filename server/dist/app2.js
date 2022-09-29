import app from './server';
import dbConnect from './database/dbconnection';
import * as dotenv from 'dotenv';
import * as http from 'http';
dotenv.config();
const PORT = process.env.PORT || process.env.API_PORT;
http.createServer();
dbConnect();
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
