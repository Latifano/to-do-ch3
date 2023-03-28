import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ sortall }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button onClick={sortall} variant="info" size="large">
          All
        </Button>
      </div>
    </>
  );
}

export default ButtonAll;
