function search() {
    const searchText = $('#searchText').val();

    let matchedItems = $('#towns li')
        .css('font-weight', '')
        .filter(function (indx, el) {
            return el.textContent.indexOf(searchText) > -1;
        })
        .css('font-weight', 'bold');
    $('#result').text(matchedItems.length);
    console.log(1);

}