import { Row, Col, Card } from "react-bootstrap";
import "./HomeVisits.css";
// import { records as data } from "./data"; // Import your JSON data and buttons
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline, IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
// import AxiosSecure from "../../Api/AxiosSecure";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Table from "../../components/Table";
import { getVisitors } from "../../Api/Contracts";
import { FaCheckDouble, FaFilter } from "react-icons/fa";
import CreateBtn from "../../components/Button/CreateBtn";
import Swal from "sweetalert2";

const columns = [
  { Header: "ID", accessor: "id", sort: true },
  { Header: "Client Name", accessor: "name", sort: true },
  { Header: "Phone", accessor: "phone", sort: false },
  { Header: "Address", accessor: "address", sort: false },
  { Header: "Visit Date", accessor: "date", sort: true },
  {
    /***********ADD A NEW CELL************************/
    Header: "View",
    accessor: "view",
    Cell: ({ row }) => (
      <>
        <FaCheckDouble className="check-icon" />
      </>
    ),
  },
  {
    /***********ADD A NEW CELL************************/
    Header: "Status",
    accessor: "status",
    Cell: ({ row }) => (
      <div>
        <BootstrapSwitchButton
          onlabel="Completed"
          offlabel="Pending"
          checked={true}
          onstyle="success"
          offstyle="light"
          class="status-btn"
          width={120}
        />
      </div>
    ),
  },
  {
    /***********ADD A NEW CELL************************/
    Header: "Actions",
    accessor: "actions",
    Cell: ({ row }) => (
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle action"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <IoMdSettings /> Action
        </button>
        <ul class="dropdown-menu">
          <li>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => handleEdit(row.original.id)}
            >
              Edit
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              type="button"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    ),
  },
];

function handleEdit() {
  console.log("Edit button clicked");
}

function handleDelete() {
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
  console.log("Delete button clicked");
}
const sizePerPageList = [
  { text: "5", value: 5 },
  { text: "10", value: 10 },
  { text: "25", value: 25 },
  { text: "All", value: 100 },
];
const HomeVisits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVisitors().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      <h4 style={{ marginTop: "10px" }} className="header-title">
        Home Visits
      </h4>
      <p className="text-muted fs-14 mb-4">A table of Visitors</p>
      <Link to={`/components/visitors/create`}>
        <CreateBtn title={"Create"} />
      </Link>
      <div>
        <div class="card text-center">
          <div class="card-header">
            <FaFilter />
            Filter
          </div>
          <div id="filter" class="card-body">
            <div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Pending
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Completed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Premium
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Free
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
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
  );
};

export default HomeVisits;
