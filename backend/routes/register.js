const { generateToken, verifyToken } = require('../scripts/utils/helper');
const { registerValidation } = require('../validations');
const validate = require('../middleware');
const router = require('express').Router();

const { userService } = require('../services');

// REGISTER ROUTE
router.post('/', validate(registerValidation), async (req, res) => {
    try {
        
        const user = await userService.register(req.body);
        const accessToken = generateToken(user);
        const refreshToken = verifyToken(user);

        const userWithToken = {
            ...user._doc,
            tokens: {
                accessToken,
                refreshToken
        }
        }

        res.json(userWithToken);
        console.log("new user ==>", userWithToken);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }

});

module.exports = router;