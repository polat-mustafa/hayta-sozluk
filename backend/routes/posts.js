const { postService } = require('../services');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const posts = await postService.getAll();
        res.send(posts);
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});

router.get('/search', async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const posts = await postService.findPostsByKeyword(keyword);
        res.render('posts', { posts });
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await postService.get(req.params.id);
        res.json(post);
    } catch (err) {
        if (err.message === 'Post not found') {
            res.status(404).send('Post not found');
            res.json({ message: err.message });
        } else {
            console.log(err);
            res.status(500).send('Something went wrong');
            res.json({ message: err.message });
        }
    }
});

router.put('/:id', async (req, res) => {
    try {
        const post = await postService.update(req.params.id, req.body);
        res.json(post);
    } catch (err) {
        res.status(400).json(err);
        res.json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await postService.delete(req.params.id);
        res.json(post);
    } catch (err) {
        if (err.message === 'Post not found') {
            res.status(404).send('Post not found');
            res.json({ message: err.message });
        } else {
            console.log(err);
            res.status(500).send('Something went wrong');
            res.json({ message: err.message });
        }
    }
});

module.exports = router;