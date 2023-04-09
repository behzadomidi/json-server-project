import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ Message }) => {
  return (
    <div className="d-flex flex-row mt-5 ms-5  p-5">
      <h1 className="text-muted display-2">{Message}</h1>
      <Spinner
        className="mx-3 mt-2"
        animation="grow"
        size="lg"
        variant="warning"
      />
    </div>
  );
};

export default Loading;
