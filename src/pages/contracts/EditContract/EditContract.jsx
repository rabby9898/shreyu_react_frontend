import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import toast from "react-hot-toast";
const EditContract = () => {
  const [value, setValue] = useState("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const number = form.number.value;
    const desc = value;
    console.log(title, number, desc);

    const contractData = {
      title,
      number,
      desc,
    };
    try {
      fetch("https://shreyu-react-server.vercel.app/contract", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(contractData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast.success("Successfully Created!");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Created Failure!");
    }
  };
  return (
    <div className="mt-5">
      <div className="display-5">Create A New Deal</div>
      <Form className="form-horizontal" onSubmit={handleSubmit}>
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
                  name="title"
                  required
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
                  name="number"
                  required
                />
              </Col>
            </Form.Group>
          </Col>
          <div>
            <ReactQuill
              modules={module}
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </Row>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "0.25rem",
            padding: "0.7rem 2rem",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            marginTop: "22px",
          }}
          className="btn btn-lg"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
          }}
          class="btn btn-lg createBtn"
          type="submit"
        >
          Create
        </button>
      </Form>
    </div>
  );
};

export default EditContract;
