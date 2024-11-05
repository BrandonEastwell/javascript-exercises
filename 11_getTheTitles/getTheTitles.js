const getTheTitles = function(books) {
    let bookNames = [];
    books.forEach(book => {
        bookNames.push(book.title);
    });
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
