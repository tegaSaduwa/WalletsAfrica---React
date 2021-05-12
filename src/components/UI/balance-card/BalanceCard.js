import React from "react";
import './BalanceCard.css'

const BalanceCard = ({allTransactions}) => {
  return (
    <div>
      <div class="balance-card">
        <h6>YOUR WALLET BALANCE</h6>
        <h1>{allTransactions?.allTransactions[0]?.balance}</h1>
        <div class="buttons row d-flex ml-1">
          <button class="btn-balance col-md-5 mr-4">
            00000000000
            <span>
              <img src="/assets/images/balance-info-img.svg" />
            </span>
          </button>

          <button class="fund-wallet col-md-5">Fund your wallet</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
