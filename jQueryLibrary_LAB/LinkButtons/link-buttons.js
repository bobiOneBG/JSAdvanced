function attachEvents() {
    $('a').on('click', function (e) {
        $('a').removeClass('selected');
        $(e.target).addClass('selected');
        
    });
}
