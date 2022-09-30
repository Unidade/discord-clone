import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel';
export default async function postRegister(req, res) {
    try {
        const { username, email, password } = req.body;
        const userData = {
            username: username.trim(),
            email: email.toLowerCase(),
        };
        // check if user data already exists in database
        const duplicateUserInfo = await User.find({
            $or: [{ username: userData.username }, { email: userData.email }],
        });
        console.log('user exists: ', duplicateUserInfo);
        if (duplicateUserInfo.length !== 0) {
            return res.status(409).send('Username or E-mail already in use');
        }
        // encrypt possword
        const encryptedPassword = await bcrypt.hash(password, 10);
        // create user document and save in database
        const user = await User.create({
            ...userData,
            password: encryptedPassword,
        });
        // create JWT token
        const token = jwt.sign({
            userId: user._id,
        }, process.env.TOKEN_KEY, {
            expiresIn: '24h',
        });
        // response
        res.status(201).json({
            userDetails: {
                email: user.email,
                username: user.username,
                token,
            },
        });
    }
    catch (err) {
        return res.status(500).send('Error occurred. Please try again');
    }
}
