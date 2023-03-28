import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ToDoHome.css";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// import dari components
import ToDoListTitle from "../components/ToDoListTitle";
import ButtonAll from "../components/ButtonAll";
import ButtonToDo from "../components/ButtonToDo";
import ButtonDone from "../components/ButtonDone";
import data from "../data/data.json";
import { Link, useLocation } from "react-router-dom";
import ToDoSearchTitle from "../components/ToDoSearchTitle";
import ToDoTextInput from "../components/ToDoTextInput";
import ToDoButtonSearch from "../components/ToDoButtonSearch";
import ToDoButtonAddNewTask from "../components/ToDoButtonAddNewTask";

function ToDoHome() {
  const [toDo, setToDo] = useState(data);

  // untuk menerima data dr nav("/")
  const state = useLocation().state;

  useEffect(() => {
    if (state) {
      setToDo(state.data);
    }
  }, [state]);

  // Delete data
  const deleteData = (id) => {
    const newData = toDo.filter((item) => item.id !== id);
    setToDo(newData);
  };

  // Sort All
  const sortAll = (id) => {
    setToDo(state?.data);
  };

  // Sort Done
  const sortDone = () => {
    const newData = toDo.filter((item) => item.complete === true);
    setToDo(newData);
  };

  // Sort ToDO
  const sortToDo = () => {
    const newData = toDo.filter((item) => item.complete === false);
    setToDo(newData);
  };

  // Ubah status jadi complete/uncomplete
  const changeStatus = (id) => {
    const newData = toDo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setToDo(newData);
  };

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

      {/* <ToDoSearchView /> */}

      {/* <Outlet /> */}

      <ToDoListTitle />
      <Container className="square border rounded">
        <Row className="mx-3 my-4">
          <Col>
            <ButtonAll
              sortall={() => {
                sortAll();
              }}
            />
          </Col>
          <Col>
            <ButtonDone
              sortdone={() => {
                sortDone();
              }}
            />
          </Col>
          <Col>
            <ButtonToDo
              sorttodo={() => {
                sortToDo();
              }}
            />
          </Col>
        </Row>

        <Row className="mx-3">
          <Col>
            {toDo && toDo.length ? "" : "No Tasks..."}
            {toDo.map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    <div className={task.complete ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>

                    <div className="iconsWrap">
                      <span
                        onClick={() => {
                          changeStatus(task.id);
                        }}
                        title="Completed / Not Completed"
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span title="Edit">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span
                        onClick={() => {
                          deleteData(task.id);
                        }}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoHome;
