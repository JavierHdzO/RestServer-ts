import { config } from 'dotenv';
import { Server } from './models/index';
config();



const server = new Server();
server.listen();