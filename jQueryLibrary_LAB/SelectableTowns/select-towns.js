function attachEvents() {
    const elements = $('#items li');

    $(elements).attr('data-selected', false);

    $(elements).click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $target = $(e.target);

        if ($target.attr('data-selected') === 'true') {
            $target.attr('data-selected', false);
            $target.css('background-color', '#fff');
        } else {
            $target.attr('data-selected', true);
            $target.css('background-color', '#ddd');
        }
    });

    $('#showTownsButton').click(function (e) {
        e.preventDefault();

        const selected = $("#items li[data-selected='true'] ")
        .toArray()
        .map((el)=>el.innerText)
        .join(', ');

        $('#selectedTowns').text(selected);
    });
}