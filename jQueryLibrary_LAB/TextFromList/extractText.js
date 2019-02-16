function extractText() {
    let items = $('#items li')
        .toArray()
        .map((e) => e.textContent)
        .join(', ');
        
    $('#result').text(items);
}