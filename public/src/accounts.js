function findAccountById(accounts, idNum) {
  const result = accounts.find(account => account.id === idNum)
  return result
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
  const found = books.filter(book => book.borrows.some(borrow => borrow.id === account.id))
  return found.length
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter(book => book.borrows[0].id === account.id && book.borrows[0].returned === false)
  const result = checkedOutBooks.map(book => {
    const author = authors.find(writer => book.authorId === writer.id)
    return ({...book, author})
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};