const moment = require('moment');
// module.exports = {
//     select: function(selected, options){
//        return options.fn(this).replace(new RegExp('value=\"' + selected + '\"'), '$&selected="selected"');
// }};



module.exports = {
    generateTime:function (date,format) {
        return moment(date).format(format);
    },

    paginate: function(options) {
        let output = '';
        if(options.hash.current == 1) {
            
        }
        // console.log(options.hash.current);
    }
}


