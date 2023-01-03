import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validationFields = ( req: Request, res: Response, next: NextFunction) => {

    const errors =  validationResult( req );

    if( !errors ){
        return res.status(404).json({
            ok:false,
            errors
        });
    }

    next();
}

export default validationFields;