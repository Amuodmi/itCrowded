const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

// this route will create a post requiring a title and body and then taking the user.id from the session
router.post("/", withAuth, (req, res) => {
	console.log(req.body);
	// expects {title: 'Taskmaster goes public!', body: 'This is an awesome site', user_id: 1}
	Post.create({
		title: req.body.title,
		body: req.body.postBody,
		user_id: req.session.user_id,
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// this route is used to update a post and requires a title and body
router.put("/:id", withAuth, (req, res) => {
	Post.update(
		{
			title: req.body.title,
			body: req.body.postBody,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// this route is to delete a post where the ID matches
router.delete("/:id", withAuth, (req, res) => {
	console.log("id", req.params.id);
	Post.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
module.exports = router;
