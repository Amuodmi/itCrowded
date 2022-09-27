const { Post } = require('../models');

const postdata = [
  {
    title: 'Add a new remote git repository',
    body: 'To add a new remote, use the git remote add command on the terminal, in the directory your repository is stored at.',
    // date_created: 2022-02-10,
    user_id: 1
  },
  {
    title: 'JavaScript Data-types and Structures',
    body: 'Primitive values (immutable datum represented directly at the lowest level of the language)Boolean type Null type Undefined type Number type BigInt type String type Symbol type Objects ',
    // date_created: 2022-03-21,
    user_id: 2
  },
  {
    title: 'Different Bootstrap Colors',
    body: '.text-primary .text-secondary .text-success .text-danger .text-warning .text-info .text-light .text-dark .text-body .text-muted .text-white .text-black-50 .text-white-50',
    // date_created: 2022-04-02,
    user_id: 3
  },
  {
    title: 'Different Flexwrap Properties',
    body: 'The flex-wrap property accepts 3 different values:nowrap (default): single-line which may cause the container to overflow wrap: multi-lines, direction is defined by flex-direction wrap-reverse: multi-lines, opposite to direction defined by flex-direction',
    // date_created: 2022-02-11,
    user_id: 4
  },
  {
    title: 'Markdown Guide, and basic syntax',
    body: '# Heading level 1 ## Heading level 2, etc. Bold text: I just love **bold text**., Italicized text is the *cats meow*., Blockquotes > Dorothy followed her through many of the beautiful rooms in her castle.',
    // date_created: 2022-05-22,
    user_id: 5
  },
  {
    title: 'Starting up ESLint',
    body: 'Npm I eslint -g eslint --init',
    // date_created: 2022-04-01,
    user_id: 6
  },
  {
    title: 'How to start MYSQL shell from terminal',
    body: 'mysql -u root -p, then enter your password',
    // date_created: 2022-04-01,
    user_id: 7
  },
  {
    title: 'Bootstrap Columns Definition',
    body: 'The numeric value in the syntax col-<number of columns> denotes how many columns that element will span in the twelve-column row. The syntax col-6 means it will take up six out of the twelve columns, or one half. And col-12 means it will take up twelve out of the twelve columns, or the entire row.',
    // date_created: 2022-06-10,
    user_id: 8
  },
  {
    title: 'How to autobuild a basic HTML in VS',
    body: 'Html:5 - autobuilds basic index.html',
    // date_created: 2022-07-01,
    user_id: 9
  },
  {
    title: 'Happy Coding!',
    body: 'function() => { take_a_break, Have_fun}',
    // date_created: 2022-07-01,
    user_id: 10
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;