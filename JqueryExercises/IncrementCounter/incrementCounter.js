function increment(selector) {
    let container = $(selector);
    
    let fragment = document.createDocumentFragment();

    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    $(incrementBtn).click(function (e) {
        e.preventDefault();
        textArea.val(+textArea.val() + 1);
    });

    $(addBtn).click(function (e) {
        e.preventDefault();
        let li = $(`<li>${textArea.val()}<\/li>`);

        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}