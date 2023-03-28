import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ToDoButtonAddNewTask({ toSecond }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          as={Link}
          to={toSecond}
          variant="info"
          size="large"
          style={{ textDecoration: "none", color: "black" }}
        >
          Add New Task
        </Button>
      </div>
    </>
  );
}

export default ToDoButtonAddNewTask;
