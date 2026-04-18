const express = require('express');
const router = express.Router();

// Placeholder for investments data
let investments = [];

// Route to get all investments
router.get('/', (req, res) => {
    res.json(investments);
});

// Route to add a new investment
router.post('/', (req, res) => {
    const { type, amount, date } = req.body;
    const newInvestment = { type, amount, date };
    investments.push(newInvestment);
    res.status(201).json(newInvestment);
});

// Route to update an investment
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { type, amount, date } = req.body;
    const index = investments.findIndex(inv => inv.id === id);
    if (index !== -1) {
        investments[index] = { id, type, amount, date };
        res.json(investments[index]);
    } else {
        res.status(404).send('Investment not found');
    }
});

// Route to delete an investment
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    investments = investments.filter(inv => inv.id !== id);
    res.status(204).send();
});

module.exports = router;