const Obra = require('../models/obra.model');

exports.list = function (req, res) {
    Obra.find({}, function(err, obras) {
        res.send(obras);  
    });
};

exports.new = function (req, res) {
    let obra = new Obra(
        {
            name: req.body.name,
            type: req.body.type,
            status: req.body.status,
            dateStart: Date.parse(req.body.dateStart),
            dateEnd: Date.parse(req.body.dateEnd)
        }
    );

    obra.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Obra Created successfully')
    })
};

exports.view = function (req, res) {
    obra.findById(req.params.id, function (err, obra) {
        if (err) return next(err);
        res.send(obra);
    })
};

exports.update = function (req, res) {
    Obra.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, obra) {
        if (err) return next(err);
        res.send('Obra udpated.');
    });
};

exports.delete = function (req, res) {
    Obra.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};