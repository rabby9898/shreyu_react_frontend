import { Row, Col, Card } from "react-bootstrap";
import "./HomeVisits.css";
// import { records as data } from "./data"; // Import your JSON data and buttons
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline, IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
// import AxiosSecure from "../../Api/AxiosSecure";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Table from "../../components/Table";
import { getContract } from "../../Api/Contracts";
import { FaCheckDouble } from "react-icons/fa";

const columns = [
  { Header: "ID", accessor: "id", sort: true },
  { Header: "Client Name", accessor: "clientName", sort: true },
  { Header: "Phone", accessor: "phone", sort: false },
  { Header: "Address", accessor: "address", sort: false },
  { Header: "Visit Date", accessor: "visitDate", sort: true },
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
            <a class="dropdown-item" href="#">
              Edit
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Delete
            </a>
          </li>
        </ul>
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
const HomeVisits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getContract().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Home Visits</h4>
              <p className="text-muted fs-14 mb-4">A table of Visitors</p>
              <Link to={`/components/contracts/create`}>
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
                    marginBottom: "20px",
                  }}
                  className="btn btn-lg createBtn"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0px 6px 10px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0px 4px 6px rgba(0, 0, 0, 0.1)";
                  }}
                  type="submit"
                >
                  Create <IoIosAddCircleOutline />
                </button>
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
  );
};

export default HomeVisits;
