function findAuthorById(authors, id) {
  let result = authors.find(author => author.id === id)
  return result
}

function findBookById(books, id) {
  let result = books.find(book => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter(book => book.borrows[0].returned === true)
  let borrowedBooks = books.filter(book => book.borrows[0].returned === false)
  let partition = [borrowedBooks, returnedBooks]
  
  return partition
}

function getBorrowersForBook(book, accounts) {
  let getAccounts = accounts.filter(account => book.borrows.some(user => user.id == account.id))
  let result = getAccounts.reduce((acc, account) => 
  {
    let returned = true
    book.borrows.forEach(user => 
      {
        if (user.id === account.id) returned = user.returned
      })
    acc.push({...account, returned})
    return acc
  },[])

  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
