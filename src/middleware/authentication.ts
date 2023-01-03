import { env } from 'process';
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import User from '../models/user';

const getToken = ( token : string):string => {
    const tokenCut = token.split(' ');

    return tokenCut[1];
}

const validateJWT = async( req: Request<any>, res: Response, next: NextFunction) => {

    let token = req.header('Authorization');


    if( !token ) return res.status(400).json({
        ok: false,
        msg:'Token missing or incorrect'
    });

    try {
        token = getToken(token);
        
        const decoded = jwt.verify(token, `${env.PRIVATE_KEY}`);

        const uid = (<any>decoded).uid;

        const user = await User.findByPk( uid );

        if(!user){
            return res.status(404).json({
                ok: false,
                msg: 'Token missing or incorrect'
            });
        }

        req.user =  (user);
        next();

    } catch (error) {
        console.log(error);
    }

}

export default validateJWT;