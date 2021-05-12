import React from "react";
import "./DashboardTable.css";
import moment from "moment";

const DashboardTable = ({allTransactions}) => {
  return (
    <div class="container">
      <div class="dashboard-table">
        <div class="container mt-3">
          <h6 class="tableheader-text">Recent Transactions</h6>
        </div>
        <div class="container mt-3">
          <table class="table main-table">
            <thead>
              <tr>
                <th scope="col">Date/time</th>
                <th scope="col">Category</th>
                <th scope="col">Reference</th>
                <th scope="col">Narration</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {allTransactions?.allTransactions.map(
                (
                  {
                    amount,
                    balance,
                    category, 
                    date,
                    narration,
                    reference,
                  },
                  index
                ) => (
                  <tr key={index}>
                    <td>{moment(date).format("DD/MM/YYYY HH:mm:ss")}</td>
                    <td>{category}</td>
                    <td>{reference}</td>
                    <td>{narration}</td>
                    <td>{amount}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
