        
var gridster = null;
$(document).ready(function () {
    gridster = $(".gridster ul").gridster({
        widget_base_dimensions: ['auto', 150],
        autogenerate_stylesheet: true,
        min_cols: 1,
        max_cols: 8,
        widget_margins: [0, 0],
        resize: {
            enabled: true
        }
    }).data('gridster');
    $('.gridster  ul').css({'padding': '0'});
});