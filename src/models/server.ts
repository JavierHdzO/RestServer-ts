import path from 'path';
import express, { Application } from 'express';
import cors from 'cors';
import UserRoutes from '../routes/users.routes';
import AuthRoutes from '../routes/auth.routes';
import sequelize from '../database';

class Server{
    
    private app: Application;
    private port: Number;
    private paths = {
        auth: '/api/auth',
        users: '/api/users'
    }
    
    constructor(){
        this.app = express();
        this.port = Number(process.env.PORT) || 0;
        
        this.database();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        // Parse body
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended:false }) );

        // public folder
        this.app.use( express.static(path.join( 'src', 'public')) );

    }

    async database(){
        try {
            await sequelize.authenticate();
            console.log('DB Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw new Error( `${error}` );
          } 
    }

    routes(){
        this.app.use(this.paths.auth, AuthRoutes );
        this.app.use(this.paths.users, UserRoutes );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listeng on port ${this.port}`);
        });
    }
}

export default Server;