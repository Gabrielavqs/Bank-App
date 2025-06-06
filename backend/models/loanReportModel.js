import { DataTypes } from "sequelize";
import config from "../config.js";

const { sequelize } = config ;

const LoanReport = sequelize.define('LoanReport', {
    totalLoans: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    totalFunds: {
        type:DataTypes.FLOAT,
        allowNull: false,
    },
    totalRepayment: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    activeLoans: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    overdueLoans: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default LoanReport;