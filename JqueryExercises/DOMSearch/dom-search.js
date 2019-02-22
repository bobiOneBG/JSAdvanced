function domSearch(selector, isCaseSensitive) {
    let container = $('#content').addClass('items-control');
    let fragment = document.createDocumentFragment();

    let enterDiv = $('<div/>', {
            class: 'add-controls'
        })
        .appendTo(fragment);

    let label = $("<label>", {
            text: 'Enter text:'
        })
        .appendTo(enterDiv);

    let input = $('<input type="text">')
        .appendTo(enterDiv);

    let addBtn =
        $('<a>', {
            class: 'button',
            style: 'display: inline-block;',
            text: 'Add'
        })
        .appendTo(enterDiv);

    let searchDiv = $('<div/>', {
            class: 'search-controls'
        })
        .appendTo(fragment);

    let searchLabel = $("<label>", {
            text: 'Search:'
        })
        .appendTo(searchDiv);

    let searchInput = $('<input type="text">')
        .appendTo(searchDiv);

    let result = $('<div/>', {
            'class': 'result-controls'
        })
        .appendTo(fragment);

    let list = $('<ul id="list">')
        .appendTo(result);

    addBtn.click(function (e) {
        e.preventDefault();
        let li = $(`<li class="list-item">
        <a class="button">X</a>
        <strong>${input.val()}</strong>
        </li>`);

        li.appendTo(list);
        input.val('');
    });

    $(document).on('click', '#list li a', function (e) {
        e.preventDefault();
        e.stopPropagation();

        e.target.parentNode.remove();
    });
//do not work
    searchInput.on('change',function (e) {
        e.preventDefault();
        let txt = e.val();
        match(txt);
    });

    function match(str) {
        if (!isCaseSensitive) {
            str = str.toLowerCase();
            list = list.map((li) => {
                return li.val().toLowerCase();
            });
        }
        $(li).css('display', '');
        $('#list').forEach(li => {
            if ($(li).find('strong').text().indexOf(str) < 0) {
                $(li).css(display, 'none');
            }
        });
    }

    container.append(fragment);
}

//Place the search controls inside a div with a class search-controls, 
//and provide a label with the text "Search:" and an empty input field. 
//When the user starts typing, the list of items should display only the items 
//that contain the given string. 
//The search is case-sensitive only if specified with an argument.
// When nothing is entered, the list will contain all elements.