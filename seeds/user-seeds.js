const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
      username: 'LucilleBall',
      email: 'Lucy@lucy.ca',
      password: 'password123'
    },
    {
      username: 'RickyRicardo',
      email: 'havana@ricky.ca',
      password: 'password123'
    },
    {
      username: 'DrWho',
      email: 'space@tardis.com',
      password: 'password123'
    },
    {
      username: 'Miwua',
      email: 'cutie@home.com',
      password: 'password123'
    },
    {
      username: 'Donna',
      email: 'Oy@tardis.com',
      password: 'password123'
    },
    {
      username: 'Martha',
      email: 'TheDoctor@tardis.com',
      password: 'password123'
    },
    {
      username: 'DavidTenant',
      email: 'WeepingAngel@tardis.com',
      password: 'password123'
    },
    {
      username: 'MattSmith',
      email: 'WeepingAngel2@tardis.com',
      password: 'password123'
    },
    {
      username: 'MrKim',
      email: 'okaythankyou@convenience.com',
      password: 'password123'
    },
    {
      username: 'MaeveWiley',
      email: 'pissoff@feministliterature.com',
      password: 'password123'
    }
  ];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;