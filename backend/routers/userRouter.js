import {Router} from "express";
import {
    registerUser,
    loginUser,
    updateUserProfile,
    getUserProfile
} from "../controllers/userController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.get('/:id/profile', authMiddleware, getUserProfile);
router.put('/:id/update', authMiddleware, updateUserProfile);

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;