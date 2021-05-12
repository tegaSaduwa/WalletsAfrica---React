import React from "react";
import "./CardsTable.css";

const CardsTable = ({ cards, delCard }) => {
  return (
    <div>
      <div className="container  mt-3" >
        <table className="table main-table" id="tableId">
          {cards?.cards.map(({ cardBalance, cvv, expiryMonth}, index) => (
            <tr key={index}>
              <td>
                <div className="table-card">
                  <p className="card-top-num">{cardBalance}</p>
                  <div className="div">
                    <p>
                      <span className="card-bottom-num pr-4">{cvv}</span>
                      <img
                        src="/assets/images/verve_logo.png"
                        alt="cadTypeLogo"
                        className="card-image"
                      />
                    </p>
                  </div>
                </div>
                <span>
                  <small className="card-view-details" data-toggle="modal">
                    View Details
                  </small>
                </span>
              </td>

              <td>
                {" "}
                <button
                  class="btn btn-sm fund-card-btn px-4 mb-3"
                  style={{ background: "#5c2799" }}
                >
                  Fund Card
                </button>{" "}
              </td>
              <td class="freeze-card">Freeze Card</td>
              <td class="delete-card" onClick={delCard.bind(this, expiryMonth)}>Delete Card</td>
              <td   style={{ color: "white" }}>..........................................................................................</td>
              <td   style={{ color: "white" }}>..........................................................................................</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CardsTable;
