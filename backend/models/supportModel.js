import { DataTypes } from "sequelize";
import config from "../config.js";

const {sequelize} = config;

const SupportRequest = sequelize.define('SupportRequest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Users',
            key:'id',
        }
    },
    message: {
        type: DataTypes.TEXT,
        unique: true,
    },
    status: {
        type:DataTypes.ENUM('Pending','In Progress', 'Resolved'),
        defaultValue: 'Pending',
    },
}, {
    timestamps: true,
});

export default SupportRequest;