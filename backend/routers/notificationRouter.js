import express from 'express';
import { 
    getNotifications,
    createNotification,
    updateNotificationStatus

 } from '../controllers/notificationController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.post('/',authMiddleware, createNotification);
router.get('/:id',authMiddleware, getNotifications);
router.put('/:notificationId',authMiddleware, updateNotificationStatus);

export default router;