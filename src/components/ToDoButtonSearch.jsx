import React from "react";
import { Button } from "react-bootstrap";

function ToDoButtonSearch() {
  return (
    <>
      <div className="d-grid gap-2">
        <Button variant="info" size="large">
          Search
        </Button>
      </div>
    </>
  );
}

export default ToDoButtonSearch;
