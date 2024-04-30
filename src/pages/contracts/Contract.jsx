import { Row, Col, Card } from "react-bootstrap";
import Table from "../../components/Table";
// import { records as data } from "./data"; // Import your JSON data and buttons
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { getContract } from "../../Api/Contracts";

const columns = [
  { Header: "ID", accessor: "id", sort: true },
  { Header: "Title", accessor: "title", sort: true },
  { Header: "Discount", accessor: "discount", sort: false },
  {
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

const handleEdit = (id) => {
  console.log("Edit ID:", id);
};

const handleDelete = (id) => {
  console.log("Delete ID:", id);
};
const Contracts = () => {
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
              <h4 className="header-title">Contracts</h4>
              <p className="text-muted fs-14 mb-4">A table of contracts</p>
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
                  className="btn btn-lg"
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
                  class="btn btn-lg createBtn"
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

export default Contracts;
