import React, { useState } from "react";
import { Alert, Modal } from "react-bootstrap";

const ModalQuestion = ({ handleShowCheck }) => {
  const [showModal, setShowModal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    setShowModal(parseInt(data.get("result")));
  };
  handleShowCheck(showModal);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {showModal != 0 && (
        <Alert variant={"danger"}>
          the answer question not true{" "}
          <span className="text-danger mx-2"> try again</span>
        </Alert>
      )}
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Please answer to the question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Question :<span className="border mx-2 p-2"> 4 + 4 = ?</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="result" className="form-label">
                Result
              </label>
              <input
                type="number"
                id="result"
                name="result"
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-outline-success w-100">
                check answer
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default ModalQuestion;
