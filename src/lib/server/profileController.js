const Profile = require('./profile.js');
// profile Controller is here to call out the logic
// instead of writing it in profiles.routes.js router.get('/')

exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number, default to 1
    const perPage = 10; // Number of items per page
    const genderFilter = req.query.gender; // Get the gender parameter from the query string

    let query = {}; // Default query without any gender filtering
    if (genderFilter !== null && genderFilter !== undefined && genderFilter !== 'all') {
      query = { geschlecht: genderFilter }; // If gender filter is provided, include it in the query
    }

    const totalProfiles = await Profile.countDocuments(query);
    const totalPages = Math.ceil(totalProfiles / perPage);

    const result = await Profile.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.render('index.ejs', {
      profile: result,
      currentPage: page,
      totalPages,
      currentGenderFilter: genderFilter // Pass the current gender filter to the view
    });
  } catch (error) {
    console.log('my Error', error);
    res.status(500).send('Internal Server Error');
  }
};
