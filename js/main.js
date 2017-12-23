$(document).ready(function() {
    $('#search').hideseek({
        list: '.list',
        attribute: 'data-title',
        hidden_mode: false,
        nodata: 'Sorry, there are no results for your search.',
    });
});
 
