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
        if(options.hash.current === 1) {
            output += `<li class="page-item disabled"><a class="page-link">First</a></li>` 
        } else {
            output += `<li class="page-item"><a href="?page=1" class="page-link">First</a></li>` 
        }

        let i = (Number(options.hash.current) > 5 ? Number(options.hash.current) - 4 : 1);

        if(i !== 1) {
            output
        }



        return output
        // console.log(options.hash.current);
    }
}


