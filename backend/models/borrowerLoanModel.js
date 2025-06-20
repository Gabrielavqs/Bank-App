import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Loan = sequelize.define('SupportRequest', {
    borrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purpose: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: false,
    },    
    interestRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    repaymentSchedule: {
    type: DataTypes.JSON,
    allowNull: false,
    },
}, {
    timestamps:true,
});

export default Loan;