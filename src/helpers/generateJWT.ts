import { env } from 'process';
import jwt from 'jsonwebtoken';

const generateJWT = ( uid: number ) =>{

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, `${env.PRIVATE_KEY}`, {
            expiresIn: '8h'
        }, (error, token) => {

            if( error ){
                console.log(error);
                reject("Can't generate JWT");
            }else{
                resolve(`Bearer ${token}`);
            }
        })
    });
}



export default generateJWT;