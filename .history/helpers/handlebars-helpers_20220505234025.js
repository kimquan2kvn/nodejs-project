// module.exports = {
//     select: function(selected, options){
//        return options.fn(this).replace(new RegExp('value=\"' + selected + '\"'), '$&selected="selected"');
// }};

const { format } = require('express/lib/response');
const moment = require('moment');

module.exports = {
    generateTime: function(date) {
        return moment(date).format(format);
    }
}