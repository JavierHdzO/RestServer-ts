import { Request, Response } from "express";
import { Op } from "sequelize";
import User from '../models/user';


export const getUsers = async( req: Request, res: Response ) =>{

    try {
        const users = await User.findAll({
            where:{
                status: true
            }
        });
        
        if( !users ){
            return res.status(404).json({
                ok: false,
                msg: 'Users not found'
            });
        }

        res.json({
            ok: true,
            data:{
                users
            }
        });
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg:'Report to admin the problem'
        });
    }

    
}

export const getUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if( !user ){
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            });
        }

        res.json({
            ok: true,
            data:{
                user
            }
        });
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg:'Report to admin the problem'
        });
    }
    
}

export const createUser = async ( req: Request, res: Response ) =>{

    const { name, email, password } = req.body;

    try {

        const emailExists = await User.findOne({
            where:{
                email
            }
        });

        if( emailExists ){
            return res.status(400).json({
                ok: false,
                msg: 'Email has already been registered'
            });
        }

        const user = User.build({
            name,
            email,
            password,
            status: true
        });

        await user.save();
        
        res.json({
            ok: true,
            data:{
                user
            }
        });
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg:'Report to admin the problem'
        });
    }
}


export const updateUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;
    const { name, email } = req.body;

    try {

        const user = await User.findByPk( id );

        if( !user ){
            return res.status(404).json({
                ok: false,
                msg: `User with id ${ id } was not found`
            });
        }

        const emailExists = await User.findOne({
            where:{
                email,
                [Op.not]:[
                    {email: user?.dataValues.email}
                ]
            }
        });

        if( emailExists ){
            return res.status(400).json({
                ok: false,
                msg: 'Email has already been registered'
            });
        }

        await user.update({name, email});

        res.json({
            ok: true,
            data:{
                user
            }
        });
       
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            msg:'Report to admin the problem'
        });
    }
}

export const deleteUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;

    try {
        
        const user = await User.findByPk( id );

        if( !user ){
            return res.status(404).json({
                ok: false,
                msg:`User not found`
            });
        }

        await user.update({status: false});

        res.json({
            ok: true,
            data:{
                user
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Report to admin the problem'
        });
    }
}

