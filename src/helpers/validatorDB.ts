
import User from "../models/user"

export const emailExists = async( email: string ) => {

    const isEmail = await User.findOne({
        where:{
            email
        }
    });

    if( !isEmail ){
        throw new Error('User email not found');
    }

}