const auth = require('../middleware/auth');

const router = require('express').Router();


router.get('/', auth, async (req, res) => {
    try {
        res.render('index')
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});



module.exports = router;