import React from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { records as data } from "./data"; // Import your JSON data and buttons
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { getContract, getRoles } from "../../Api/Contracts";
// import AxiosSecure from "../../Api/AxiosSecure";
import Swal from "sweetalert2";
import Table from "../../components/Table";
import CreateBtn from "../../components/Button/CreateBtn";

const columns = [
  { Header: "ID", accessor: "id", sort: true },
  { Header: "Role", accessor: "role", sort: true },
  {
    /***********ADD A NEW CELL************************/
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div>
        <button
          style={{ marginRight: "4px" }}
          onClick={() => handleEdit(row.original.id)}
          className="btn btn-sm btn-primary"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(row.original.id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    ),
  },
];

const sizePerPageList = [
  { text: "5", value: 5 },
  { text: "10", value: 10 },
  { text: "25", value: 25 },
  { text: "All", value: 100 },
];

/***********EDIT SINGLE Role************************/
const handleEdit = (id) => {
  console.log("Edit ID:", id);
};

/***********DELETE SINGLE Role************************/
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // AxiosSecure.delete(`/contracts/${id}`)
      // .then((res) => {
      //   if (res.data.deletedCount > 0) {
      // refetch();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      //   }
      // });
    }
  });
};
const Role = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoles().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <div>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="header-title">Roles</h4>
                <p className="text-muted fs-14 mb-4">A table of roles</p>
                <Link to={`/components/contracts/create`}>
                  <CreateBtn title={"Create"} />
                </Link>
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <Table
                    columns={columns}
                    data={data}
                    pageSize={5}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                    isSearchable={true}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Role;
