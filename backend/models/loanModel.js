import { DataTypes } from "sequelize";
import config from "../config.js";

const { sequelize } = config;

const Loan = sequelize.define('Loan',{
    borrowerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    borrowerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    term: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    interestRate: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    },
    purpose: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    repaymentSchedule: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    riskLevel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    repaymentAmount: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending',
    },
}, {
    timestamps:true,
});

export default Loan;