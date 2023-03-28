import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import ToDoButtonAddNewTask from "./ToDoButtonAddNewTask";
import ToDoButtonSearch from "./ToDoButtonSearch";
import ToDoSearchTitle from "./ToDoSearchTitle";
import ToDoTextInput from "./ToDoTextInput";

function ToDoSearchView() {
  return (
    <>
      <ToDoSearchTitle />
      <Container className="square border rounded">
        <Row className="mx-3 mt-4">
          <Col lg={6}>
            <ToDoTextInput />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row className="mx-3 mt-4 mb-4">
          <Col lg={6} className="xs-my-3">
            <ToDoButtonSearch />
          </Col>
          <Col></Col>
          <Col lg={4} className="xs-my-3">
            <ToDoButtonAddNewTask as={Link} toSecond="secondpages" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoSearchView;
