const path = require('path');

module.exports = {

    var uploadDir = path.join(__d)
    isEmpty: function(obj){
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

}