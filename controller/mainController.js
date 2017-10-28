var mainSrvc = require('../service/mainService.js');

module.exports = {
    init: function(req, res){
        res.send('Hello World!');
    },

    getUserDetails: function(req, res,next) {
        var usrDetails = mainSrvc.getUserDetails(req.body);

        if(usrDetails == null){
          next(new Error("Fail to obtain user details"));
        }

        res.send(usrDetails);
    }



}
