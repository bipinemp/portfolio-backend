const User = require("../models/userModel");

// Post a Form
const postForm = async (req, res) => {
  const { user_name, user_email, user_subject, message } = req.body;
  try {
    const user = await User.create({
      user_name,
      user_email,
      user_subject,
      message,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

module.exports = {
  postForm,
};
