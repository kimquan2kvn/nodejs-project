const moment = require('moment');
// module.exports = {
//     select: function(selected, options){
//        return options.fn(this).replace(new RegExp('value=\"' + selected + '\"'), '$&selected="selected"');
// }};



module.exports = {
    generateTime:function (date,format) {
        return moment(date).format(format);
    }

    zpaginate: function(options) {
        console.log(options);
    }
}


