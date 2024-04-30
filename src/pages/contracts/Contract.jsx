import { Row, Col, Card } from "react-bootstrap";
import Table from "../../components/Table";
import { records as data } from "./data"; // Import your JSON data and buttons
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Title",
    accessor: "title",
    sort: true,
  },
  {
    Header: "Discount",
    accessor: "discount",
    sort: false,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const contracts = () => {
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
                  class="flex justify-center items-center gap-1 select-none rounded-lg bg-[#5369f8] py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span> Create</span>{" "}
                  <IoIosAddCircleOutline className="text-sm" />
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

export default contracts;
