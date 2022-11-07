const { generateToken, verifyToken } = require('../scripts/utils/helper');
const { loginValidation } = require('../validations');
const validate = require('../middleware');
const router = require('express').Router();

const { userService } = require('../services');

// LOGIN ROUTE
router.post('/', validate(loginValidation), async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.login({ email, password })
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

    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }

});

module.exports = router;