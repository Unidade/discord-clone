import express from 'express';
const router = express.Router();
router.post('/register', (req, res) => {
    return res.send('register route');
});
router.post('/login', (request, res) => {
    return res.send('login route');
});
export default router;
