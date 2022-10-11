const { userService, postService } = require('../services');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        const users = await userService.getAll();
        res.render('users', { users });
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const user = await userService.get(req.params.id);
        res.render('user', { user });
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

router.post('/', async (req, res) => {
    try {
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
        const { title, content } = req.body;
        const post = await postService.createPost(id, title, content);
    
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