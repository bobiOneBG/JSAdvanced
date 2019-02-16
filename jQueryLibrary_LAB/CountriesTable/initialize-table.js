function initializeTable() {
    //   $('#countriesTable').append(`<tr><td>Bulgaria</td><td>Sofia</td><td><a id='1' href='#'>[Up]</a><a id='2' href='#'>[Down]</a><a id='3' href='#'>[Delete]</a></td></tr>`);
    //   $('#countriesTable').append(`<tr><td>Germany</td><td>Berlin</td><td><a id='1' href='#'>[Up]</a><a id='2' href='#'>[Down]</a><a id='3' href='#'>[Delete]</a></td></tr>`);
    //   $('#countriesTable').append(`<tr><td>Russia</td><td>Moscow</td><td><a id='1' href='#'>[Up]</a><a id='2' href='#'>[Down]</a><a id='3' href='#'>[Delete]</a></td></tr>`);

    $('#createLink').on('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const countryName = $('#newCountryText').val();
        const capitalName = $('#newCountryText').val();

        $('#countriesTable')
            .append(`<tr><td>${countryName}</td><td>${capitalName}</td><td><a id='1' href='#'>[Up]</a><a id='2' href='#'>[Down]</a><a id='3' href='#'>[Delete]</a></td></tr>`);


        $('#countriesTable tr:last-child td:last-Child a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $target = $(e.target);

            const $tr= $target.parent().parent();

            if ($target.text().indexOf('Delete') > -1) {
               $tr.remove();

            } else if ($target.text().indexOf('Up') > -1) {
               $tr.insertBefore($tr.prev());

            } else if ($target.text().indexOf('Down') > -1) {
               $($tr).insertAfter($tr.next());
            }            
        });
    });
}


//$('#countriesTable').append(`<tr><td>${countryName}</td><td>${capitalName}</td><td><a id='1' href='#'>[Up]</a><a id='2' href='#'>[Down]</a><a id='3' href='#'>[Delete]</a></td></tr>`);