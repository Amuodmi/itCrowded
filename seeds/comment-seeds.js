const { Comment } = require("../models");

const commentdata = [
	{
		comment_text: "Oh, riiigghhtt",
		user_id: 6,
		post_id: 1,
	},
	{
		comment_text: "The posion.",
		user_id: 6,
		post_id: 8,
	},
	{
		comment_text: "The posion for Kuzco.",
		user_id: 3,
		post_id: 10,
	},
	{
		comment_text: "The posion chosex specially to kill Kuzco.",
		user_id: 3,
		post_id: 8,
	},
	{
		comment_text: "Kuzcos poison.",
		user_id: 7,
		post_id: 5,
	},
	{
		comment_text: "....that posion?",
		user_id: 1,
		post_id: 2,
	},
	{
		comment_text: "Yes that posion!",
		user_id: 6,
		post_id: 7,
	},
	{
		comment_text: "Got you covered.",
		user_id: 7,
		post_id: 4,
	},
	{
		comment_text: "Excellent.",
		user_id: 6,
		post_id: 2,
	},
	{
		comment_text: "A few drops in his drink - ",
		user_id: 6,
		post_id: 7,
	},
	{
		comment_text: "- then I will propose a toast",
		user_id: 3,
		post_id: 4,
	},
	{
		comment_text: "and he will be dead before dessert!",
		user_id: 5,
		post_id: 4,
	},
	{
		comment_text: "Which will be a real shame.",
		user_id: 4,
		post_id: 9,
	},
	{
		comment_text: "because it was going to be delicious.",
		user_id: 5,
		post_id: 7,
	},
	{
		comment_text: "I was gonna make spinach puffs.",
		user_id: 6,
		post_id: 2,
	},
	{
		comment_text: "Ive never liked your spinach puffs!",
		user_id: 8,
		post_id: 2,
	},
	{
		comment_text: "A llama!",
		user_id: 2,
		post_id: 5,
	},
	{
		comment_text: "He is supposed to be dead!",
		user_id: 4,
		post_id: 3,
	},
	{
		comment_text: "Bring me that vial.",
		user_id: 5,
		post_id: 6,
	},
	{
		comment_text: "This is elixir of...",
		user_id: 9,
		post_id: 8,
	},
	{
		comment_text: "Llama!",
		user_id: 6,
		post_id: 4,
	},
	{
		comment_text: "Take him outside and finish the job, now!",
		user_id: 4,
		post_id: 1,
	},
	{
		comment_text: "But what about the spinach puffs?",
		user_id: 3,
		post_id: 8,
	},
	{
		comment_text: "There is no time!",
		user_id: 8,
		post_id: 7,
	},
	{
		comment_text: "How about a quick cup of tea?",
		user_id: 1,
		post_id: 5,
	},
	{
		comment_text: "Very well.",
		user_id: 5,
		post_id: 3,
	},
	{
		comment_text: "A quick cup of tea.",
		user_id: 1,
		post_id: 5,
	},
	{
		comment_text: "Then take him outside and finish the job!",
		user_id: 4,
		post_id: 6,
	},
	{
		comment_text: "I am a llama!.",
		user_id: 4,
		post_id: 8,
	},
	{
		comment_text: "Llama face.",
		user_id: 4,
		post_id: 9,
	},
	{
		comment_text: "Oh no, a scary tree.",
		user_id: 7,
		post_id: 5,
	},
	{
		comment_text: "Im afrad!.",
		user_id: 10,
		post_id: 1,
	},
	{
		comment_text: "Too late.",
		user_id: 3,
		post_id: 8,
	},
	{
		comment_text: "What, I dunno, somebody is throwing stuff.",
		user_id: 5,
		post_id: 3,
	},
	{
		comment_text: "I demand you take me back to my castle.",
		user_id: 10,
		post_id: 4,
	},
	{
		comment_text: "No.",
		user_id: 10,
		post_id: 8,
	},
	{
		comment_text: "Bring it on.",
		user_id: 10,
		post_id: 7,
	},
	{
		comment_text: "Is there anything on this menu not swimming in gravy?",
		user_id: 8,
		post_id: 5,
	},
	{
		comment_text: "Quick, Yzma put your hands in the air!",
		user_id: 8,
		post_id: 1,
	},
	{
		comment_text: "Why do we even have that lever?",
		user_id: 9,
		post_id: 7,
	},
	{
		comment_text: "Brilliant, brilliant, brilliant!",
		user_id: 5,
		post_id: 4,
	},
	{
		comment_text: "Genius I say!",
		user_id: 2,
		post_id: 1,
	},
	{
		comment_text: "Does he have any idea who he is dealing with?",
		user_id: 4,
		post_id: 6,
	},
	{
		comment_text: "How could he do this to me?",
		user_id: 9,
		post_id: 6,
	},
	{
		comment_text: "Why I practically raised him!",
		user_id: 7,
		post_id: 9,
	},
	{
		comment_text: "Let me guess, you have a great personality.",
		user_id: 4,
		post_id: 9,
	},
	{
		comment_text: "Yeah, you think he woulda turned out better.",
		user_id: 10,
		post_id: 1,
	},
	{
		comment_text: "Oh, it is my shoulder angel.",
		user_id: 2,
		post_id: 6,
	},
	{
		comment_text: "Dont listen to that guy, look what I can do.",
		user_id: 10,
		post_id: 1,
	},
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
