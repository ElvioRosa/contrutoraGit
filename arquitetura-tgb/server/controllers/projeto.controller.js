const Projeto = require('../models/projeto.model');
const Parse = require('json-parse');

exports.list = function (req, res) {
    Projeto.find({}, function(err, projetos) {
        res.send(dateFormat(projetos));  
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
        res.send(dateFormat(projeto));
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
