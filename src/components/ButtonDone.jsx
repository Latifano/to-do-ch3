import React from "react";
import { Button } from "react-bootstrap";

function ButtonDone({ sortdone }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button onClick={sortdone} variant="info" size="large">
          Done
        </Button>
      </div>
    </>
  );
}

export default ButtonDone;
