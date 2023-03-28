import React from "react";
import { Button } from "react-bootstrap";

function ButtonSubmit({ onClicktoHome }) {
  return (
    <>
      <div className="d-grid gap-2 mt-4">
        <Button onClick={onClicktoHome} variant="info" size="large">
          submit
        </Button>
      </div>
    </>
  );
}

export default ButtonSubmit;
