const userRouter = require('express').Router();
const User = require("../models/Usermodel");
const generateToken = require("../Utils.js");


userRouter.post('/signup', async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const mobile = req.body.mobile;
    const address = req.body.address;

    const temp = await User.findOne({ mobile: mobile });
    if (temp) {
      res.status(404).send('User already exists');
    } else {
      const newUser = new User({
        name:name,
        password:password,
        mobile:mobile,
        address:address
      })
      const user = await newUser.save();
      res.status(200).send({
        user: {
          name: user.name,
          password: user.password,
          mobile:user.mobile,
          address:user.address,
          token: generateToken(user),
        },
        message: 'Account created successfully',
      });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

userRouter.post('/signin', async (req, res) => {
  try {
    const mobile = req.body.mobile;
    const password = req.body.password;
    const user = await User.findOne({ mobile: mobile });
    if (user) {
      if (user.password == password) {
        res.status(200).send({ user: user });
      } else {
        res.status(400).send('Wrong password');
      }
    } else {
      res.status(404).send('user not found');
    }
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
});




module.exports = userRouter;
