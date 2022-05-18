const path = require('path');

module.exports = {

    uploadDir: path.join(__dirname, '../public/uploads'),
    isEmpty: function(obj){
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                // Nếu đối tượng có thuộc tính với tên có trong đối số chuỗi, nó sẽ trả về true. Nếu không nó sẽ trở lạifalse
                return false;
            }
        }
        return true;
    }

}