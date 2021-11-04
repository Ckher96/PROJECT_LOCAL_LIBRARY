function findAccountById(accounts, idNum) {
  let result = accounts.find(account => account.id === idNum)
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let found = books.filter(book => book.borrows.some(borrow => borrow.id === account.id))
  return found.length
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter(book => book.borrows[0].id === account.id && book.borrows[0].returned === false)
  let result = []
  checkedOutBooks.forEach(book => 
    {
      let author = authors.find(writer => book.authorId === writer.id)
      result.push({...book, author})
    })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};