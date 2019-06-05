const Projeto = require('../models/projeto.model');
const Parse = require('json-parse');

exports.list = function (req, res) {
    Projeto.find({}, function(err, projeto) {
        res.send(count(projeto))
    });
}


 function count(array) {

    let json;
    let result1 = [];
    let result2 = [];
    let ret = [];

    for(let i = 0; i < array.length; i++){
        json = JSON.stringify(array[i]);
        obj = Parse("erro json",json);
        
        if(result1.indexOf(obj.type) >= 0){
            let pos = result1.indexOf(obj.type);
            result2[pos] = result2[pos]+1;

        }else{
            result1[result1.length] = obj.type;
            result2[result2.length] = 1;
        }
        
    }

    
    for(let i = 0; i < result1.length; i++){
        let obj = { name: result1[i], qtd: result2[i] };
		ret[i] = obj;
    }

    return ret;
}
