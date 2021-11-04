function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const result = books.filter(book => book.borrows[0].returned === false)
  return result.length
}

function reduceBook(books) {
  const result = books.reduce((acc, book) => {
    if (acc[book.genre])
    {
      acc[book.genre] +=1
    }
    else
    acc[book.genre] = 1
    return acc
    
  },{})
  return result
}

function getMostCommonGenres(books) {

  const result = reduceBook(books)
  
  const newArray = []
  for (let genre in result) 
  {
    newArray.push({name : genre, count : result[genre]})
  }
    
    
    newArray.sort((book1, book2) => book1.count > book2.count ? -1 : 1) 
    return newArray.slice(0,5)
}

function getMostPopularBooks(books) {

  const newArray = books.map(book => ({name : book.title, count : book.borrows.length}))
  
  newArray.sort((book1, book2) => book1.count > book2.count ? -1 : 1)

  return newArray.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const newArray = books.reduce((acc, book) => 
  {

    let authorName = ""
    let count = 0
    authors.forEach(({name : {first, last}, id}) => 
      {
        if (id === book.authorId) 
        {
          authorName = `${first} ${last}`
          count = count + book.borrows.length
        }
      })
    acc.push({name : authorName, count})
    return acc

  }, [])

  newArray.sort((author1, author2) => author1.count > author2.count ? -1 : 1)
  

  return newArray.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
