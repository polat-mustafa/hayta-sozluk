const { userService, postService } = require('../services');

const router = require('express').Router();

// Validate and middleware
const validate = require('../middleware');
const { userValidation } = require('../validations');

router.get('/', async (req, res) => {
    try{
        const users = await userService.getAll();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});

router.get('/pages/:page', async (req, res) => {
    try{
        const page = req.params.page;
        const users = await userService.getPage(page);
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});





router.get('/:id', async (req, res) => {
    try{
        const user = await userService.get(req.params.id);
        res.json(user);
    } catch (err) {
        if(err.message === 'User not found') {
            res.status(404).send('User not found');
            res.json({ message: err.message });
        } else {
            console.log(err);
            res.status(500).send('Something went wrong');
            res.json({ message: err.message });
        }
    }
});

router.post('/', validate(userValidation), async (req, res) => {
    try {
        req.body.password = encryptPassword(req.body.password);
        const user = await userService.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }

});

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { content, category } = req.body;
        const post = await postService.createPost(id, content, category);
    
        res.json(post);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }

});

router.put('/:id', async (req, res) => {
    try {
        const user = await userService.update(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await userService.delete(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }
});


module.exports = router;
