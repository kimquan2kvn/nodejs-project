const path = require('path');

module.exports = {

    var 
    isEmpty: function(obj){
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

}