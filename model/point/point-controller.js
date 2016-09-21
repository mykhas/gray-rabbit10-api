const Controller = require('../../lib/controller');
const pointModel  = require('./point-facade');


class PointController extends Controller {
    find(req, res, next) {
        return pointModel.find(req.query)
            .then(collection => {
                res.status(200).json(collection);
            })
            .catch(err => next(err));
    }

    create(req, res, next) {
        this.model.create(req.body)
        .then(doc => {
            doc.neighbors.map(neighbor => {
                pointModel.findById(neighbor).then(point => {
                    console.log('point', point._id);
                    point.neighbors.push(doc._id);
                    pointModel.update({_id: neighbor}, {
                        neighbors: point.neighbors
                    });
                });
                res.status(201).json(doc)
            });
        })
        .catch(err => next(err));
    }
}

module.exports = new PointController(pointModel);
