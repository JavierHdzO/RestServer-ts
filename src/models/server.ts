import express, { Application } from 'express';

class Server{
    
    private app: Application;
    private port: Number;
    
    constructor(){
        this.app = express();
        this.port = Number(process.env.PORT) || 0;
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listeng on port ${this.port}`);
        });

    }
}

export default Server;