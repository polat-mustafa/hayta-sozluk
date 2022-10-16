const { categoryService } = require('../services');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const categories = await categoryService.getAll();
        res.json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const items = await categoryService.get(id);
        res.json(items);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }

});



router.post('/', async (req, res) => {
    try {
        const category = await categoryService.create(req.body);
        res.json(category);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});



module.exports = router;