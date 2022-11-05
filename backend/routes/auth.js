const { encryptPassword } = require('../scripts/utils/helper');

const router = require('express').Router();

const { userService } = require('../services');

// LOGIN ROUTE
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login({ email, password });
        res.json(user);
    }
    catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }

});

module.exports = router;