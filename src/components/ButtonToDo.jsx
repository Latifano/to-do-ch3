import React from "react";
import { Button } from "react-bootstrap";

function ButtonToDo({ sorttodo }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button onClick={sorttodo} variant="info" size="large">
          Todo
        </Button>
      </div>
    </>
  );
}

export default ButtonToDo;
