import React from "react";
import CardsModal from "../modals/cards-modal/CardsModal";
import "./CardsTable.css";

const CardsTable = ({ cards }) => {
  return (
    <div>
      <div className="container  mt-3" >
        <table className="table main-table" id="tableId">
          {cards?.cards.map(({ cardBalance, cvv }, index) => (
            <tr key={index}>
              <td>
                <div className="table-card">
                  <p className="card-top-num">{cardBalance}</p>
                  <div className="div">
                    <p>
                      <span className="card-bottom-num pr-4">{cvv}</span>
                      <img
                        src="../../../../assets/images/verve_logo.png"
                        alt="cadTypeLogo"
                        className="card-image"
                      />
                    </p>
                  </div>
                </div>
                <span>
               <CardsModal />
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
              <td class="delete-card">Delete Card</td>
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
