import React, {useState} from "react";
import {Modal} from "react-bootstrap"

const CardsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <span>
        <small class="card-view-details" data-toggle="modal">
          View Details
        </small>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="modal-header modal-width">
            <div class="row">
              <div class="col ">
                <div class="col-card">
                  <h6 class="mt-2">Wallets.ng</h6>
                  <p>2345 6788 9999 000</p>
                  <small class="mb-2">04/29</small>

                  <p>
                    <span class="card-bottom-num pr-4 mr-2">
                      <small>Tega Saduwa</small>
                    </span>
                    <img
                      src="/assets/images/verve_logo.png"
                      alt="cadTypeLogo"
                      class="card-image"
                    />
                  </p>
                </div>
              </div>
              <div class="col mr-5">
                <div class="col-bal">
                  <h6>Card Balance</h6>
                  <p>1000000000</p>
                </div>
              </div>

              <div class="container mt-3">
                <h6 class="m-tableheader-text">Card Transaction</h6>
              </div>
              <div class="container mt-3">
                <table class="table m-main-table">
                  <thead>
                    <tr>
                      <th scope="col">Biller</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date/Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>POS</td>
                      <td>N14556000</td>
                      <td>12/09/23</td>
                    </tr>
                    <tr>
                      <td>POS</td>
                      <td>N14556000</td>
                      <td>12/09/23</td>
                    </tr>
                    <tr>
                      <td>POS</td>
                      <td>N14556000</td>
                      <td>12/09/23</td>
                    </tr>
                    <tr>
                      <td>POS</td>
                      <td>N14556000</td>
                      <td>12/09/23</td>
                    </tr>
                    <tr>
                      <td>POS</td>
                      <td>N14556000</td>
                      <td>12/09/23</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CardsModal;
