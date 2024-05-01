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
import { createContract } from "../../../Api/Contracts";
import CreateBtn from "../../../components/Button/CreateBtn";

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
      const data = await createContract(contractData);
      console.log(data);
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
        <CreateBtn title={"Create"} />
      </Form>
    </div>
  );
};

export default CreateCotract;
