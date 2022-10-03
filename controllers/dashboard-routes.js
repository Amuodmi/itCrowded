const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// This route will get posts for the dashboard display that match the user ID that has logged in
// then renders the dashboard handlebar
router.get("/", withAuth, (req, res) => {
	console.log(req.session);
	console.log("======================");
	Post.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: ["id", "title", "body", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("dashboard", { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// this route is for when we click to edit a post from the dashboard
router.get("/edit/:id", withAuth, (req, res) => {
	Post.findByPk(req.params.id, {
		attributes: ["id", "title", "body", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			if (dbPostData) {
				const post = dbPostData.get({ plain: true });

				res.render("edit-post", {
					post,
					loggedIn: true,
				});
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// this route will get the post that you click on and render the edit-post handlebar
router.get("/post/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "body", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}

			const post = dbPostData.get({ plain: true });

			res.render("edit-post", {
				post,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
