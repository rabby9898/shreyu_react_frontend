import React, { FormEvent } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";

const CreateCotract = () => {
  return (
    <div className="mt-5">
      <div className="display-5">Create A New Deal</div>
      <Form
        className="form-horizontal"
        //  onSubmit={handleSubmit}
      >
        <Row>
          <Col md={6}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md={12} htmlFor="simpleinput1">
                Title
              </Form.Label>
              <Col md={12}>
                <Form.Control
                  type="text"
                  id="simpleinput1"
                  defaultValue="Some text value..."
                  name="title"
                />
              </Col>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md={12} htmlFor="simpleinput2">
                Discount %
              </Form.Label>
              <Col md={12}>
                <Form.Control
                  type="number"
                  id="simpleinput2"
                  defaultValue="Percentage"
                  name="number"
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <button type="submit" className="btn btn-primary" data-mdb-ripple-init>
          Create Deal
        </button>
      </Form>
    </div>
  );
};

export default CreateCotract;
