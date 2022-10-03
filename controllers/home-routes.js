const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// this route will get all the posts for the homepage and render the hompage handlebars
router.get("/", (req, res) => {
	console.log("============================");
	Post.findAll({
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

			res.render("homepage", {
				posts,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//  If you click on a single post, this will get the single post attributes and render the single-post handlebars
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

			res.render("single-post", {
				post,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// This route will find a single post and render the edit-post handlebars
router.get("/edit/:id", (req, res) => {
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

// this route will reder the login handlebars
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});

// this route will render the signup handlebars
router.get("/signup", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("signup");
});

// this route will reder the create-post handlebars
router.get("/create-post", (req, res) => {
	if (req.session.loggedIn) {
		res.render("create-post", {
			loggedIn: req.session.loggedIn,
		});
		return;
	} else {
		res.redirect("/");
	}
});

module.exports = router;
