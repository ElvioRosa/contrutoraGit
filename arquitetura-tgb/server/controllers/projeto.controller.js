const Projeto = require('../models/projeto.model');

exports.list = function (req, res) {
    Projeto.find({}, function(err, projetos) {
        res.send(projetos);  
    });
};

exports.new = function (req, res) {
    let projeto = new Projeto(
        {
            name: req.body.name,
            type: req.body.type,
            status: req.body.status,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd
        }
    );

    projeto.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send('projeto Created successfully')
    })
};

exports.view = function (req, res) {
    Projeto.findById(req.params.id, function (err, projeto) {
        if (err) return next(err);
        res.send(projeto);
    })
};

exports.update = function (req, res) {
    Projeto.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, projeto) {
        if (err) return next(err);
        res.send('projeto udpated.');
    });
};

exports.delete = function (req, res) {
    Projeto.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};