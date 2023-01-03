import { Sequelize } from "sequelize-typescript";
import User from '../models/user';
// import path from 'path';

const sequelize =  new Sequelize({
    dialect:'mysql',
    host:'localhost',
    port: 3306,
    database:'NodeProject',
    username:'root',
    password:'',
    models:[User]
});

export default sequelize;

