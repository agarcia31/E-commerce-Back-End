const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// wrong route
router.use((req, res) => {
  res.send("<h1>Hello World</h1>")
});

module.exports = router;