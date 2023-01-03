import { Router } from 'express';
import { check } from 'express-validator';
import validationFields from '../middleware/validator-fields';
import { emailExists } from '../helpers/validatorDB';
import { login } from '../controllers/auth.controller';


const router = Router();

router.post('/login', [
    check('email', 'Email field is required').not().isEmpty(),
    check('email').custom( emailExists ),
    check('password','Password field is required').not().isEmpty(),
    validationFields
] , login);


export default router;