import "./CreatePatients.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsGenderAmbiguous } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
const CreatePatients = () => {
  return (
    <div>
      <div class="card">
        <div class="card-header">Patients</div>
        <div class="card-body">
          <form className="patients-form">
            <div class="flex-container">
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <FaUser />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Client Name"
                  />
                </div>
              </div>
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
                    placeholder="Email Address"
                  />
                </div>
              </div>
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
                  />
                </div>
              </div>
            </div>

            <div class="flex-container">
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
                    placeholder="Address"
                  />
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <BsGenderAmbiguous />
                    </div>
                  </div>
                  <select
                    class="form-control"
                    id="inlineFormCustomSelect"
                    placeholder="Select Gender"
                  >
                    <option selected>Select Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
              <div class="flex-item">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <SlCalender />
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Date Pick"
                  />
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePatients;
