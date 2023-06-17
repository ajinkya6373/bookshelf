
export const filterBooks =(books,state)=>{
    return books.filter((book)=>book.state ===state)
}

export const searchBooks=(books, searchTerms)=> {
    if (searchTerms.length>0){
        const filteredBooks = books.filter((book) => {
          const { name, author } = book;
          const searchTermLowerCase = searchTerms.toLowerCase();
          const bookNameLowerCase = name.toLowerCase();
          const authorLowerCase = author.toLowerCase();
      
          return (
            bookNameLowerCase.includes(searchTermLowerCase) ||
            authorLowerCase.includes(searchTermLowerCase)
          );
        });
      
        return filteredBooks;
    }
  }
  
  