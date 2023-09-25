/* 
Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. 

There is an account object in which it is necessary to implement methods for working with balance and transaction history.
*/

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [
    {
      id: 1663783742100,
      type: 'deposit',
      amount: 1000,
    },
  ],

  /* This Method creates and returns a transaction object.
    Each transaction object has properties: id, type and amount
   */
  createTransaction(amount, type) {
    const transaction = {
      id: Date.now(), //  returns the number of milliseconds elapsed since the epoch (January 1, 1970)
      type,
      amount,
    };

    return transaction;
  },

  /* Task 1:
    This deposit() method is responsible for adding the amount to the balance.
      a. Calls createTransaction to create a transaction object using 'DEPOSIT' type
      b. ADDS transaction object to the END of transactions history
      c. ADDS the amount to the current account balance
   */
  deposit(amount) {
    // write code below this line
    // a.
    // b.
    // c.
    // write above this line
  },

  /* Task 2:
   This withdraw() method is responsible for withdrawing the amount from the balance.
      a. Calls createTransaction to create a transaction object using 'WITHDRAW' type
      b. ADDS transaction object to the END of transactions history
      c. SUBTRACTS the amount to the current account balance
  */
  withdraw(amount) {
    // write code below this line
    // a.
    // b.
    // c.
    // write above this line
  },
};

// call deposit and withdraw methods here to check
