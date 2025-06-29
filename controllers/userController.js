const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAllUsers = async(req, res) => {
  try {
    const users = await User.findAll({
      attributes : ['id', 'username', 'email']
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }

}

const createUser = async(req, res) => {
    try{
        const { username, email, password, role } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already in use' });
        }


        const user = await User.create({
            username,
            email,
            password: hashed,
            role : role || 'user'
        })

        const {password : _, ...userdata} = user.toJSON();
        res.status(201).json(userdata);
    } catch (err){
        console.error("❌ Server error:", err);
        res.status(400).json({error : "server error"});
    }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role }, // payload
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // token expires in 1 hour
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    // ✅ Store refresh token (example: DB or in-memory array for now)
    //refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {getAllUsers, createUser, loginUser};