import { SlDocs } from "react-icons/sl";
import CreateBtn from "../../../components/Button/CreateBtn";
import "./Sidebar.css";
import { FaDollarSign, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiWebtrees } from "react-icons/si";
import toast from "react-hot-toast";
const Sidebar = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const number = form.number.value;
    // const address = form.address.value;
    // const gender = form.gender.value;

    // const visitorsData = {
    //   name,
    //   email,
    //   number,
    //   address,
    //   gender,
    // };

    try {
      //   console.log(visitorsData);
      toast.success("Successfully Submitted!");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Submitted Failure!");
    }
  };
  return (
    <div>
      <div class="wrapper">
        <nav id="sidebar">
          <ul class="list-unstyled components">
            <li class="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                General
              </a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">General 1</a>
                </li>
                <li>
                  <a href="#">General 2</a>
                </li>
                <li>
                  <a href="#">General 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                Email
              </a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Email 1</a>
                </li>
                <li>
                  <a href="#">Email 2</a>
                </li>
                <li>
                  <a href="#">Email 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">SMS</a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
              ></button>
              <button
                class="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-align-justify"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      General
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Social
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Logos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="card">
            <div class="card-body">
              <form className="patients-form" onSubmit={handleSubmit}>
                <div class="flex-container">
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <SlDocs />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Extreme Lab"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <FaDollarSign />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="United States Dollar"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <FaLocationDot />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Country"
                        name="number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <FaPhoneAlt />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="flex-container">
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <MdEmail />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email@example.com"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="flex-item">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <SiWebtrees />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="WWW.EXAMPLE.com"
                        name="website"
                      />
                    </div>
                  </div>
                </div>

                <CreateBtn title={"Save"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
