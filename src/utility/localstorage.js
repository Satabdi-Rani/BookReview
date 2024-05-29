const getStoredBook = () => {
    const storedBook = localStorage.getItem('saved-books');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}


const saveBook = id => {
    const storedBooks = getStoredBook();
    const exists = storedBooks.find( clickedBookId => clickedBookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('saved-books', JSON.stringify(storedBooks));
    }
}

export {getStoredBook ,saveBook}