const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res) => {
  try {
    const users = await User.findAll({
      attributes : ['id', 'username', 'email']
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }

})

router.post('/', async(req, res) => {
    try{
        const { username, email, password, role } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashed,
            role : role || 'user'
        })

        const {password : _, ...userdata} = user.toJSON();
        res.status(201).json(userdata);
    } catch (err){
        res.status(400).json({error : err.message});
    }
})

module.exports = router;