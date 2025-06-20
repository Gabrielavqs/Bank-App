import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Repayment = sequelize.define('borrower-Repayment', {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0.01
        },
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    loanId: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    borrowerId: {
        type: DataTypes.INTEGER,
        references:{
            model: 'Users',
            key: 'id',
        }
    },
}, {
    timestamps: true,
});


export default Repayment;