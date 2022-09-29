import express from 'express';
import joiValidation from 'express-joi-validation';
import { postLogin, postRegister } from '../controllers/auth/authControllers';
import { loginSchema, registerSchema } from '../schemas';
const validator = joiValidation.createValidator({});
const router = express.Router();
router.post('/register', validator.body(registerSchema), postRegister);
router.post('/login', validator.body(loginSchema), postLogin);
export default router;
