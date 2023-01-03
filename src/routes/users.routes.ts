import { Router } from "express";
import { check } from "express-validator";

import { getUsers,
         getUser,
         createUser,
         updateUser,
         deleteUser  } from '../controllers/users.controller';

import authentication from '../middleware/authentication';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id',[
    authentication
], deleteUser);

export default router;