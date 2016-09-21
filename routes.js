const Router = require('express').Router;
const router = new Router();

const point  = require('./model/point/point-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to gray-rabbit10-api API!' });
});

router.use('/point', point);


module.exports = router;
