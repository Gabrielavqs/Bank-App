import Loan from '../models/loanModel.js';

export const getAllLoan = async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const approveLoan = async (req, res) => {
    const { id } = req.params;
    try {
        const loan = await Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'approved';
        await loan.save();
        res.json({ message: 'Loan approved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const rejectLoan = async (req, res) => {
    const { id } = req.params;
    try {
        const loan = await Loan.findByPk(id);
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        loan.status = 'rejected';
        await loan.save();
        res.json({ message: 'Loan rejected successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//checking risk of loan
const calculateRiskLevel = (amount, term) => {
    if (amount > 50000 && term > 12){
        return 'High';
    } else if (amount > 10000 && term <= 12){
        return 'Medium';
    }else{
        return 'Low';
    }
}
