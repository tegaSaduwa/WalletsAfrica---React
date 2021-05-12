import React, { useEffect } from "react";
import BalanceCard from "../../UI/balance-card/BalanceCard";
import DashboardTable from "../../UI/dashboard-table/DashboardTable";
import TransSummary from "../../UI/trans-summary/TransSummary";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { getTransactions } from "../../../actions/allTransactionsActions";

const Home = () => {
  const allTransactions = useSelector((state) => state.allTransactions);
  const dispatch = useDispatch();
  console.log(allTransactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <div class="main">
      <div class="row container mt-5 mx-4">
        <div class="col-md-4">
          <BalanceCard allTransactions={allTransactions} />
        </div>
        <div class="col-md-8">
          <TransSummary allTransactions={allTransactions} />
        </div>
      </div>
      <div class="container mt-3 mr-4 ml-4">
        <DashboardTable allTransactions={allTransactions} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  allTransactions: state.allTransactions,
});
export default connect(mapStateToProps, { getTransactions })(Home);
