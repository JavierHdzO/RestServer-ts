import { Request, Response } from "express";
import User from "../models/user";
import generateJWT from "../helpers/generateJWT";

export const login = async(req: Request, res: Response) => {

    const { email, password } = req.body;


    try {

        const user = await User.findOne({
            where:{
                email
            }
        });

        const correctPassword = user === null?
            false:
            user.dataValues.password === password;
        
        if( !correctPassword || !user?.dataValues.status ) return res.status(401).json({
            ok: false,
            msg:'Invalid email or password'
        });

        const { id } = user.dataValues;

        const token = await generateJWT( id );

        res.json({
            ok: true,
            data:{
                user,
                token
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Report to the admin the problem'
        });
    }


}

