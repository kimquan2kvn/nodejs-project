// module.exports = {
//     select: function(selected, options){
//        return options.fn(this).replace(new RegExp('value=\"' + selected + '\"'), '$&selected="selected"');
// }};

const moment = require('moment');

module.exports =  {
    generateTimefunction (date,format) {
        return moment(date).format(format);
    }
}