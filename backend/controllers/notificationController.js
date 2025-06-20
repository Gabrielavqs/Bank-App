import Notification from '../models/notificationModel.js';


//getting notification by id
export const getNotifications = async (req, res) => {
    try {
        const lenderId = req.user.id;

        const notifications = await Notification.findAll({
            where: { lenderId },
            order: [['createdAt', 'DESC']],
        });

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notifications.' });
    }
};

export const createNotification = async (req,res) => {
    const { message } = req.body;
    const userId = req.user.id;
    try {
        const notification = await Notification.create({ userId, message });
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({message:'Error creating notification'});
    }
};

//update notification

export const updateNotificationStatus = async (req,res) => {
    const { notification } = req.params;
    const { status } = req.body;
    try {
        const notification = await Notification.findByPk(notificationId)

        if (!notification) return res.status(404).json({ message: 'Notification not found' });

        notification.status = status;
        await notification.save();

        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message:'Error updating notification', error });
    }
};