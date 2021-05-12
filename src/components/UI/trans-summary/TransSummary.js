import React from 'react';
import './TransSummary.css'

const TransSummary = ({allTransactions}) => {
    return (
        <div class="trans">
  <button class="btn btn-sm">This week</button>

  <div class="row p-4 my-3">
    <div class="col-4 column">
      <p>Transactions</p>
      <h1> {allTransactions?.allTransactions?.length}</h1>
    </div>
    <div class="col-4 column">
      <p>Amount Spent</p>
      <h1>{allTransactions?.allTransactions[9]?.amount}</h1>
    </div>
    <div class="col-4 column">
      <p>Amount Received</p>
      <h1>{allTransactions?.allTransactions[0]?.amount}</h1>
    </div>
  </div>
</div>
    )
}

export default TransSummary
