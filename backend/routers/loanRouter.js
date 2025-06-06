import express from "express";
import {
    getAllLoan, 
    approveLoan, 
    rejectLoan
} from "../controllers/loanController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/',authMiddleware, getAllLoan);
router.put('/:id/approve',authMiddleware, approveLoan);
router.put('/:id/reject',authMiddleware, rejectLoan);

export default router;