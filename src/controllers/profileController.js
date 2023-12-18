const Profile = require('./../models/profile.js');
// profile Controller is here to call out the logic
// instead of writing it in profiles.routes.js router.get('/')

exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number, default to 1
    const perPage = 10; // Number of items per page

    const totalProfiles = await Profile.countDocuments();
    const totalPages = Math.ceil(totalProfiles / perPage);

    const result = await Profile.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.render('index.ejs', {
      profile: result,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.log('my Error', error);
    // Handle the error appropriately (send an error response, log, etc.)
    res.status(500).send('Internal Server Error');
  }
};
