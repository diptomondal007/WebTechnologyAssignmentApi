const router = require('express').Router();
const verify = require('./verifyAuth');
const { postCreation } = require('../validation/post');
const Post = require('../model/Posts');
const Vote = require('../model/Vote');

router.get('/all', async (req, res) => {


    Post.find({})
        .then(postFound => {
            if (!postFound) return res.status(404).end("Sorry! No post found!");
            return res.status(200).json(postFound);
        });
});

router.post('/create', verify, async (req, res) => {

    const { error } = postCreation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        votes: req.body.votes,
        _created_by: req.user._id
    });
    try {
        const savedPost = await post.save();
        res.send({ post: savedPost._id });
    } catch (err) {
        res.status(400).send(err);
    }

})

router.post('/vote', (req, res) => {
    let query = { post_id: req.query.id }
    Vote.findOne(query).then(postFound => {
        if (!postFound) {
            const voteNew = new Vote({
                post_id: query.post_id,
                votes: 1,
                usersVoted: req.user

            })
            try {
                const savedPost = voteNew.save();
                res.send({ post: savedPost._id });
            } catch (err) {
                res.status(400).send(err);
            }
        } else {
            Vote.updateOne(query, {
                $inc: {
                    votes: 1
                }
            }).then(
                () => {
                    res.status(201).json({
                        message: Vote.findOne(query)
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );
        }
    })




})

router.get('/user_post', verify, async (req, res) => {

    Post.find({ _created_by: req.user._id })
        .then(postFound => {
            if (!postFound) return res.status(404).end("Sorry! No post found!");
            return res.status(200).json(postFound);
        })

});

router.put('/update/', verify, (req, res) => {
    let query = { _id: req.query.id, _created_by: req.user._id }

    Post.updateOne(query, {
        $set: {
            title: req.body.title,
            body: req.body.body,
        }
    }).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
})

router.delete('/delete/', verify, async (req, res, next) => {
    let query = { _id: req.query.id, _created_by: req.user._id }

    try {
        const removedPost = await Post.deleteOne(query);
        if (removedPost.deletedCount > 0) {
            res.json({ message: "deleted" });
        } else {
            res.json({ message: "not found" });
        }



    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;