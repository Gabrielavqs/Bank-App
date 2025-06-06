import jwt from "jsonwebtoken";

const authMiddleware = ( req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token missing' })
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
};

export default authMiddleware;