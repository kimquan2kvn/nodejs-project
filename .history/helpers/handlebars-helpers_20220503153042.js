module.exports = {
    select: function(selected, options){
       return options.fn(this).replace(new RegExp('value=\"' selected + '\"'), '$5selected="selected");
};