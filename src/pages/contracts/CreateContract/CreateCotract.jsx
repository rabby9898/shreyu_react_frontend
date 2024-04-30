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

const CreateCotract = () => {
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
      fetch("http://localhost:2000/contract", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(contractData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
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
          class="select-none rounded-lg bg-[#5369f8] my-2 py-2 px-10 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
        >
          Create
        </button>
      </Form>
    </div>
  );
};

export default CreateCotract;
