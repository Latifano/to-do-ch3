import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import ButtonSubmit from "./ButtonSubmit";

function TextInputSecond({ val, change, click }) {
  return (
    <>
      <InputGroup className="form-input">
        <InputGroup.Text id="basic-addon1">
          <PencilSquare />
        </InputGroup.Text>
        <Form.Control
          placeholder="Input/Edit ToDo"
          aria-label="Input/Edit ToDo"
          aria-describedby="basic-addon1"
          value={val}
          onChange={change}
        />
      </InputGroup>
      <ButtonSubmit onClicktoHome={click} />
    </>
  );
}

export default TextInputSecond;
