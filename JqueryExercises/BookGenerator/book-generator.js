function createBook(selector, bookTitle, author, isbn) {
    let book = function () {
        let id = 1;

        return function (selector, title, author, isbn) {
            let newBook = $('<div>');

            newBook.attr('id', `book${id++}`);
            newBook.css('border', 'none');

            let bookTitle = $(`<p>${title}</p>`)
                .addClass('title')
                .appendTo(newBook);
            let bookAuthor = $(`<p>${author}</p>`)
                .addClass('author')
                .appendTo(newBook);
            let bookIsbn = $(`<p>${isbn}</p>`)
                .addClass('isbn')
                .appendTo(newBook);

            // let selectBtn = $('<button>')
            //     .text('Select')
            //     .appendTo(newBook);
            // let deselectBtn = $('<button>')
            //     .text('Deselect')
            //     .appendTo(newBook);

                let selectBtn = $('<button>Select</button>');
let deselectBtn = $('<button>Deselect</button>');

            selectBtn.click(function (e) {
                e.preventDefault();
                newBook.css('border', '2px solid blue');
            });

            deselectBtn.click(function (e) {
                e.preventDefault();
                newBook.css('border', 'none');
            });
            selectBtn.appendTo(newBook);
            deselectBtn.appendTo(newBook);
            let container = $(selector);
            container.append(newBook);
        };
    }();

     book("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
    // book("#wrapper", "Pod Igoto", "Ivan vazov", 2222);
}