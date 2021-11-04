function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id)
  return result
}

function findBookById(books, id) {
  const result = books.find(book => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter(book => book.borrows[0].returned === true)
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false)
  const partition = [borrowedBooks, returnedBooks]
  
  return partition
}

function getBorrowersForBook(book, accounts) {
  const getAccounts = accounts.filter(account => book.borrows.some(user => user.id == account.id))
  const result = getAccounts.reduce((acc, account) => 
  {
    let returned = book.borrows.find((userName) => userName.id === account.id).returned
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
