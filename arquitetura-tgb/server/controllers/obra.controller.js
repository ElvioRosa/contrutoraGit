const Obra = require('../models/obra.model');
const Parse = require('json-parse');

exports.list = function (req, res) {
    Obra.find({}, function(err, obras) {
        res.send(dateFormat(obras));  
    });
};

exports.new = function (req, res) {
    let obra = new Obra(
        {
            name: req.body.name,
            type: req.body.type,
            status: req.body.status,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd
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
        res.send(dateFormat(obra));
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

function dateFormat(array) {
    let json;
    let ret = [];

    if(array.length){
        for(let i = 0; i < array.length; i++){
            json = JSON.stringify(array[i]);
            obj = Parse("erro json",json);
            
            if(obj.dateStart){
                obj.dateStart = obj.dateStart.substring(0, 10);
            }
            if(obj.dateEnd){
                obj.dateEnd = obj.dateEnd.substring(0, 10);
            }

            ret[i] = obj;
        }
    }else{
        ret = array;
    }

    return ret;
}
