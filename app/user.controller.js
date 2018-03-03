let User = require('mongoose').model('User');

exports.find = async (req, res) => {
  console.log(req.body);
  try {
    let user = await User.findOne({ 'name': req.body.name }).exec();
    if (!user) {
      res.status(400).json({ error: 'User not found' });
    } else {
      if(user.password !==req.body.password) {
        res.status(400).json({ error: 'Wrong password ' });
      } else {
        res.json({ user: user });
      }
    }
  } catch(err) {
    res.status(500).json({ error: err });
  }
};

