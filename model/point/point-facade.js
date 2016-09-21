const Model = require('../../lib/facade');
const pointSchema  = require('./point-schema');


class PointModel extends Model {}

module.exports = new PointModel(pointSchema);
